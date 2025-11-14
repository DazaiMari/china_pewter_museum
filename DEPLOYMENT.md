# 中国锡器博物馆 - Docker 部署指南

## 项目简介
这是一个基于 React + Vite 构建的中国锡器博物馆网站，使用 Docker 容器化部署。

## 部署文件说明

### 核心文件
- `Dockerfile` - 构建 React 应用的 Docker 镜像
- `docker-compose.yml` - Docker Compose 服务编排文件
- `nginx.conf` - Nginx 服务器配置文件
- `.dockerignore` - Docker 构建忽略文件

### 可选文件
- `proxy.conf` - Nginx 反向代理配置文件（用于负载均衡）

## 部署步骤

### 1. 基础部署
```bash
# 构建并启动服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f china-pewter-museum
```

### 2. 自定义端口部署
```bash
# 修改 docker-compose.yml 中的端口映射
# 例如使用 8080 端口：
# ports:
#   - "8080:80"

# 然后启动服务
docker-compose up -d

# 访问地址：http://localhost:8080
```

### 3. 生产环境部署

#### 修改端口映射
编辑 `docker-compose.yml` 中的端口配置：
```yaml
ports:
  - "3000:80"  # 将 80 改为你想要的端口
```

#### 设置环境变量
创建 `.env` 文件：
```env
NODE_ENV=production
PORT=80
```

#### 使用 HTTPS
1. 将 SSL 证书放在 `ssl/` 目录下
2. 修改 `nginx.conf` 添加 HTTPS 配置
3. 更新 `docker-compose.yml` 中的端口映射

### 4. 常用命令

```bash
# 停止服务
docker-compose down

# 重新构建镜像
docker-compose build --no-cache

# 重启服务
docker-compose restart

# 查看资源使用情况
docker-compose top

# 清理未使用的镜像
docker system prune -a
```

## 服务配置

### 端口说明
- `3000` - 主服务端口（HTTP，可自定义）
- `80` - 容器内部端口（Nginx）

### 健康检查
服务包含健康检查机制，每 30 秒检查一次服务状态。

### 网络配置
使用 Docker 默认网络，简化部署配置。

## 故障排除

### 1. 构建失败
```bash
# 清理 Docker 缓存
docker system prune -a

# 重新构建
docker-compose build --no-cache
```

### 2. 端口冲突
检查端口是否被占用：
```bash
# Linux/macOS
lsof -i :3000

# Windows
netstat -ano | findstr :3000
```

### 3. 权限问题
```bash
# 确保 Docker 有权限访问项目目录
sudo chown -R $USER:$USER .
```

## CDN 加速配置（推荐海外部署）

### 为什么需要 CDN？
如果服务器部署在北京，海外用户（如澳洲）访问时图片加载会很慢。使用 CDN 可以将图片缓存到全球节点，大幅提升访问速度。

### 快速配置 CDN

#### 方式一：使用 docker-compose.yml（推荐）

1. 编辑 `docker-compose.yml`，取消注释并填入 CDN 域名：
```yaml
build:
  context: .
  dockerfile: Dockerfile
  args:
    VITE_CDN_URL: "https://your-cdn-domain.com"  # 填入你的 CDN 域名
```

2. 重新构建并启动：
```bash
docker-compose build --no-cache
docker-compose up -d
```

#### 方式二：使用 Docker 构建参数

```bash
docker build --build-arg VITE_CDN_URL=https://your-cdn-domain.com -t china-pewter-museum .
docker run -d -p 3000:80 china-pewter-museum
```

### CDN 服务商推荐

- **国内用户**：阿里云 CDN、腾讯云 CDN
- **海外用户**：AWS CloudFront、Cloudflare
- **全球用户**：Cloudflare（免费）、AWS CloudFront

### 详细配置指南

请参考 [CDN_SETUP.md](./CDN_SETUP.md) 获取完整的 CDN 配置说明，包括：
- 各 CDN 服务商的详细配置步骤
- 图片上传到 CDN 的方法
- 测试验证方法
- 故障排查

## 性能优化

### 1. 启用 Gzip 压缩
Nginx 配置已包含 Gzip 压缩设置。

### 2. 静态资源缓存
静态资源（JS、CSS、图片）已配置长期缓存。

### 3. CDN 加速
配置 CDN 后，图片将从全球 CDN 节点加载，大幅提升海外访问速度。详见上方 CDN 配置说明。

### 4. 镜像优化
- 使用 Alpine Linux 减小镜像大小
- 多阶段构建分离构建和运行环境

## 安全建议

1. 定期更新基础镜像
2. 使用非 root 用户运行容器
3. 配置防火墙规则
4. 启用 HTTPS（生产环境）
5. 定期备份数据

## 监控和维护

### 日志管理
```bash
# 查看实时日志
docker-compose logs -f

# 查看特定服务日志
docker-compose logs china-pewter-museum
```

### 资源监控
```bash
# 查看容器资源使用
docker stats

# 查看服务状态
docker-compose ps
```

## 联系信息
如有问题，请联系开发团队。
