# 使用 Node.js 20 作为构建环境（Vite 6 及以上要求 Node >=20.19）
FROM node:20-bookworm as builder

# 设置工作目录
WORKDIR /app

# 使用国内 npm 镜像以加速依赖安装（可选）
RUN npm config set registry https://registry.npmmirror.com

# 复制依赖文件
COPY package*.json ./

# 安装依赖（包括 devDependencies）
RUN npm ci

# 复制源代码
COPY . .

# 构建前端项目
RUN npm run build

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
