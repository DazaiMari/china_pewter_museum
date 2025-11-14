# CDN 加速快速开始指南

## 🚀 5 分钟快速配置 CDN

### 步骤 1: 选择 CDN 服务商

**推荐方案**：
- 🇦🇺 **澳洲/海外用户**：AWS CloudFront 或 Cloudflare（免费）
- 🇨🇳 **国内用户**：阿里云 CDN 或腾讯云 CDN

### 步骤 2: 上传图片到 CDN

#### AWS CloudFront + S3（推荐海外）

```bash
# 1. 安装 AWS CLI
# 2. 配置凭证
aws configure

# 3. 创建 S3 存储桶
aws s3 mb s3://china-pewter-museum-images

# 4. 上传图片
aws s3 sync public/images s3://china-pewter-museum-images/images --acl public-read

# 5. 创建 CloudFront 分发
# 在 AWS 控制台创建 CloudFront 分发，源站选择 S3 存储桶
# 获取 CloudFront 域名，例如：https://d1234567890.cloudfront.net
```

#### Cloudflare（免费方案）

```bash
# 1. 注册 Cloudflare 账号
# 2. 添加网站并配置 DNS
# 3. 使用 Cloudflare Workers 或 R2 存储图片
# 4. 获取 CDN 域名
```

#### 阿里云 OSS + CDN（推荐国内）

```bash
# 1. 开通阿里云 OSS
# 2. 安装 ossutil
# 3. 配置认证
ossutil config

# 4. 上传图片
ossutil cp -r public/images oss://your-bucket/images

# 5. 开通 CDN，绑定 OSS 作为源站
# 6. 获取 CDN 域名
```

### 步骤 3: 配置项目使用 CDN

#### 方式 A: 使用 docker-compose.yml（最简单）

编辑 `docker-compose.yml`：

```yaml
services:
  china-pewter-museum:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        VITE_CDN_URL: "https://your-cdn-domain.com"  # 填入你的 CDN 域名
```

然后重新构建：

```bash
docker-compose build --no-cache
docker-compose up -d
```

#### 方式 B: 使用 Docker 构建参数

```bash
docker build --build-arg VITE_CDN_URL=https://your-cdn-domain.com -t china-pewter-museum .
docker run -d -p 3000:80 china-pewter-museum
```

### 步骤 4: 验证 CDN 是否生效

1. 打开网站
2. 按 F12 打开开发者工具
3. 查看 Network 标签
4. 检查图片请求的 URL：
   - ✅ **成功**：图片 URL 应该是 `https://your-cdn-domain.com/images/...`
   - ❌ **失败**：图片 URL 仍然是 `/images/...`

### 步骤 5: 测试访问速度

使用以下工具测试不同地区的访问速度：
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

## 📝 代码使用说明

### 方式一：使用工具函数（推荐）

```tsx
import { getImageUrl } from './utils/imageUtils';

function MyComponent() {
  return (
    <img 
      src={getImageUrl('/images/about/about1.jpg')} 
      alt="About" 
    />
  );
}
```

### 方式二：使用 Image 组件（最简单）

```tsx
import { Image } from './components/Image';

function MyComponent() {
  return (
    <Image 
      src="/images/about/about1.jpg" 
      alt="About" 
      className="rounded-lg"
    />
  );
}
```

### 方式三：使用 Hook

```tsx
import { useImageUrl } from './hooks/useImageUrl';

function MyComponent() {
  const imageUrl = useImageUrl('/images/about/about1.jpg');
  
  return (
    <img src={imageUrl} alt="About" />
  );
}
```

## ⚠️ 注意事项

1. **CDN 域名格式**：
   - ✅ 正确：`https://cdn.example.com`
   - ✅ 正确：`https://cdn.example.com/`（会自动处理）
   - ❌ 错误：`cdn.example.com`（缺少协议）

2. **图片路径**：
   - ✅ 正确：`/images/about/about1.jpg`
   - ❌ 错误：`images/about/about1.jpg`（缺少开头的斜杠）

3. **重新构建**：
   - 修改 CDN 配置后，**必须重新构建** Docker 镜像
   - 运行时修改环境变量不会生效（Vite 在构建时注入）

## 🔧 故障排查

### 问题：图片仍然从主服务器加载

**解决**：
1. 检查 `docker-compose.yml` 中的 `args` 是否取消注释
2. 确认重新构建了镜像：`docker-compose build --no-cache`
3. 在浏览器控制台运行：`console.log(import.meta.env.VITE_CDN_URL)`

### 问题：CDN 图片 404

**解决**：
1. 确认图片已上传到 CDN
2. 检查 CDN 域名是否正确
3. 验证图片路径是否匹配（注意大小写）

### 问题：CORS 跨域错误

**解决**：
在 CDN 配置中添加 CORS 头：
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD
```

## 📚 更多信息

- 详细配置指南：[CDN_SETUP.md](./CDN_SETUP.md)
- 部署文档：[DEPLOYMENT.md](./DEPLOYMENT.md)

## 💡 提示

- **开发环境**：不需要配置 CDN，图片从本地加载
- **生产环境**：配置 CDN 后，海外访问速度可提升 5-10 倍
- **成本**：Cloudflare 免费套餐足够小到中型网站使用

