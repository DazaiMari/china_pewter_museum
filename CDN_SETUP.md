# CDN 加速配置指南

本文档说明如何为项目配置 CDN 加速，以提升海外用户访问速度。

## 📋 目录

- [方案概述](#方案概述)
- [CDN 服务商选择](#cdn-服务商选择)
- [配置步骤](#配置步骤)
- [Docker 部署配置](#docker-部署配置)
- [测试验证](#测试验证)

## 🎯 方案概述

项目已支持通过环境变量配置 CDN 域名。当配置了 `VITE_CDN_URL` 后，所有图片资源将自动通过 CDN 加载，大幅提升海外访问速度。

### 工作原理

1. **开发环境**：图片使用相对路径 `/images/...`，从本地服务器加载
2. **生产环境（无 CDN）**：图片从主服务器加载
3. **生产环境（有 CDN）**：图片从 CDN 节点加载，全球加速

## 🌐 CDN 服务商选择

### 1. 阿里云 CDN + OSS（推荐国内用户）

**优势**：
- 国内访问速度快
- 与阿里云服务器集成方便
- 价格相对便宜

**配置步骤**：
1. 开通阿里云 OSS 对象存储
2. 上传 `public/images` 目录到 OSS
3. 开通 CDN，绑定 OSS 作为源站
4. 获取 CDN 加速域名
5. 配置环境变量：`VITE_CDN_URL=https://your-cdn-domain.com`

### 2. AWS CloudFront（推荐海外用户）

**优势**：
- 全球节点覆盖广
- 与 S3 集成简单
- 适合海外访问

**配置步骤**：
1. 创建 S3 存储桶
2. 上传 `public/images` 目录到 S3
3. 创建 CloudFront 分发
4. 配置源站为 S3 存储桶
5. 获取 CloudFront 域名：`https://d1234567890.cloudfront.net`
6. 配置环境变量：`VITE_CDN_URL=https://d1234567890.cloudfront.net`

### 3. Cloudflare（推荐免费方案）

**优势**：
- 免费套餐可用
- 全球节点多
- 配置简单

**配置步骤**：
1. 注册 Cloudflare 账号
2. 添加网站并配置 DNS
3. 上传图片到 Cloudflare Workers 或使用 R2 存储
4. 配置环境变量：`VITE_CDN_URL=https://your-domain.cloudflarecdn.com`

### 4. 腾讯云 CDN + COS

**优势**：
- 国内访问速度快
- 与腾讯云服务器集成方便

**配置步骤**：
1. 开通腾讯云 COS 对象存储
2. 上传 `public/images` 目录到 COS
3. 开通 CDN，绑定 COS 作为源站
4. 获取 CDN 加速域名
5. 配置环境变量：`VITE_CDN_URL=https://your-cdn-domain.com`

## 🔧 配置步骤

### 方法一：使用环境变量文件（推荐）

1. **创建 `.env` 文件**（生产环境）：
```bash
VITE_CDN_URL=https://your-cdn-domain.com
```

2. **重新构建项目**：
```bash
npm run build
```

### 方法二：Docker 环境变量

在 `docker-compose.yml` 或 Docker 运行时配置：

```yaml
environment:
  - VITE_CDN_URL=https://your-cdn-domain.com
```

或在构建时传入：
```bash
docker build --build-arg VITE_CDN_URL=https://your-cdn-domain.com .
```

### 方法三：构建时注入（Vite）

修改 `vite.config.ts`，在构建时读取环境变量：

```typescript
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_CDN_URL': JSON.stringify(process.env.VITE_CDN_URL || ''),
  },
});
```

## 🐳 Docker 部署配置

### 方式一：构建时传入环境变量

修改 `Dockerfile`：

```dockerfile
# 在构建阶段接收 CDN URL
ARG VITE_CDN_URL
ENV VITE_CDN_URL=$VITE_CDN_URL

# ... 其他配置

RUN npm run build
```

构建命令：
```bash
docker build --build-arg VITE_CDN_URL=https://your-cdn-domain.com -t china-pewter-museum .
```

### 方式二：运行时环境变量（需要重新构建）

如果使用 `docker-compose.yml`：

```yaml
services:
  china-pewter-museum:
    build: .
    environment:
      - VITE_CDN_URL=https://your-cdn-domain.com
    ports:
      - "80:80"
```

**注意**：Vite 的环境变量在构建时注入，运行时环境变量不会生效。需要在构建时传入。

### 方式三：多阶段构建（推荐）

创建 `.env.production` 文件：
```bash
VITE_CDN_URL=https://your-cdn-domain.com
```

修改 `Dockerfile`：
```dockerfile
# 复制环境变量文件
COPY .env.production .env.production

# 构建时使用
RUN npm run build
```

## 📤 上传图片到 CDN

### 使用阿里云 OSS CLI

```bash
# 安装 ossutil
# 配置认证信息
ossutil config

# 上传图片目录
ossutil cp -r public/images oss://your-bucket/images
```

### 使用 AWS CLI

```bash
# 配置 AWS 凭证
aws configure

# 上传图片目录
aws s3 sync public/images s3://your-bucket/images
```

### 使用腾讯云 COS CLI

```bash
# 安装 coscmd
pip install coscmd

# 配置认证信息
coscmd config -a <SecretId> -s <SecretKey> -b <Bucket> -r <Region>

# 上传图片目录
coscmd upload -rs public/images /images
```

## ✅ 测试验证

### 1. 检查环境变量

在浏览器控制台运行：
```javascript
console.log(import.meta.env.VITE_CDN_URL);
```

### 2. 检查图片 URL

打开开发者工具 Network 标签，查看图片请求：
- 如果配置了 CDN，图片 URL 应该是：`https://cdn-domain.com/images/...`
- 如果未配置，图片 URL 应该是：`/images/...`

### 3. 性能测试

使用以下工具测试 CDN 效果：
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- Chrome DevTools Network 面板

### 4. 全球访问测试

使用以下工具测试不同地区的访问速度：
- [CDN Perf](https://www.cdnperf.com/)
- [Pingdom](https://tools.pingdom.com/)

## 🔍 故障排查

### 问题：图片仍然从主服务器加载

**原因**：环境变量未正确注入

**解决**：
1. 检查 `.env` 文件是否存在且格式正确
2. 确认重新构建了项目
3. 检查浏览器控制台的 `import.meta.env.VITE_CDN_URL` 值

### 问题：CDN 图片 404

**原因**：图片未上传到 CDN 或路径不正确

**解决**：
1. 确认图片已上传到 CDN
2. 检查 CDN 域名配置是否正确
3. 验证图片路径是否匹配（注意大小写）

### 问题：CORS 跨域错误

**原因**：CDN 未配置 CORS 头

**解决**：
1. 在 CDN 配置中添加 CORS 头：
   ```
   Access-Control-Allow-Origin: *
   Access-Control-Allow-Methods: GET, HEAD
   ```

## 📊 性能优化建议

1. **启用图片压缩**：上传前压缩图片，减少文件大小
2. **使用 WebP 格式**：现代浏览器支持，体积更小
3. **配置 CDN 缓存**：设置合理的缓存时间（建议 1 年）
4. **启用 HTTP/2**：CDN 通常支持 HTTP/2，提升并发性能
5. **图片懒加载**：项目已实现，确保所有图片使用 `loading="lazy"`

## 💰 成本估算

### 阿里云 CDN
- 流量费用：约 ¥0.24/GB（国内），¥0.50/GB（海外）
- 存储费用：OSS 约 ¥0.12/GB/月
- 预计月成本：¥50-200（根据流量）

### AWS CloudFront
- 流量费用：约 $0.085/GB（前 10TB）
- 存储费用：S3 约 $0.023/GB/月
- 预计月成本：$20-100（根据流量）

### Cloudflare
- 免费套餐：足够小到中型网站使用
- 付费套餐：$20/月起

## 📝 总结

配置 CDN 后，海外用户访问速度将显著提升。建议：

1. **国内用户**：使用阿里云或腾讯云 CDN
2. **海外用户**：使用 AWS CloudFront 或 Cloudflare
3. **全球用户**：使用 Cloudflare（免费）或 AWS CloudFront

配置完成后，记得测试验证，确保图片正常加载。

