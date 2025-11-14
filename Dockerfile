# 使用 Node.js 20 作为构建环境（Vite 6 及以上要求 Node >=20.19）
FROM node:20-bookworm as builder

# 设置工作目录
WORKDIR /app

# 使用国内 npm 镜像以加速依赖安装（可选）
RUN npm config set registry https://registry.npmmirror.com

# 复制依赖文件（优化缓存层）
COPY package*.json ./

# 安装依赖（包括 devDependencies，Tailwind CSS 需要）
RUN npm ci

# 复制所有配置文件（确保 Tailwind、PostCSS、Vite 等配置都被包含）
COPY vite.config.* ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY eslint.config.js ./
COPY tsconfig*.json ./
COPY index.html ./

# 复制 public 目录（包含所有图片等静态资源）
# Vite 会将 public 目录的内容复制到 dist 根目录
COPY public ./public

# 复制源代码
COPY src ./src

# 设置构建环境变量
ENV NODE_ENV=production

# 支持 CDN 配置（通过构建参数传入）
# 使用方式: docker build --build-arg VITE_CDN_URL=https://cdn.example.com .
ARG VITE_CDN_URL
ENV VITE_CDN_URL=$VITE_CDN_URL

# 如果存在 .env.production 文件，也会被使用
# 优先级: 构建参数 > .env.production > 默认值（空）

# 构建前端项目
# Vite 会自动：
# 1. 通过 PostCSS 处理 Tailwind CSS 的编译
# 2. 将 public 目录的内容复制到 dist 根目录
# 3. 处理所有静态资源路径
RUN npm run build

# 验证构建输出（确保 dist 目录和关键文件存在）
RUN test -d /app/dist && \
    test -f /app/dist/index.html && \
    echo "Build successful: dist directory and index.html exist"

# -------------------------
# 使用 Nginx 作为生产环境
# -------------------------
FROM nginx:alpine

# 将前端构建结果复制到 Nginx 静态资源目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
