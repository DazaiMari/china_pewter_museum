# 502 错误故障排除指南

## 🔍 诊断步骤

### 1. 检查容器状态
```bash
# 查看容器是否正在运行
docker-compose ps

# 查看容器日志
docker-compose logs china-pewter-museum

# 实时查看日志
docker-compose logs -f china-pewter-museum
```

### 2. 检查构建是否成功
```bash
# 重新构建镜像
docker-compose build --no-cache

# 查看构建过程
docker-compose build --no-cache --progress=plain
```

### 3. 检查容器内部文件
```bash
# 进入容器检查文件
docker exec -it china-pewter-museum sh

# 在容器内检查文件是否存在
ls -la /usr/share/nginx/html/
cat /etc/nginx/conf.d/default.conf

# 检查 Nginx 配置语法
nginx -t
```

### 4. 检查端口占用
```bash
# 检查端口是否被占用
netstat -tlnp | grep :3000
# 或者
lsof -i :3000
```

## 🛠️ 常见解决方案

### 方案 1: 重新构建和启动
```bash
# 停止所有服务
docker-compose down

# 清理 Docker 缓存
docker system prune -a

# 重新构建
docker-compose build --no-cache

# 启动服务
docker-compose up -d
```

### 方案 2: 检查构建输出
```bash
# 检查 dist 目录是否生成
docker run --rm -v $(pwd):/app -w /app node:20-bookworm npm run build
ls -la dist/
```

### 方案 3: 使用更简单的 Nginx 配置
如果问题持续，可以临时使用最简单的配置：

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 方案 4: 检查服务器资源
```bash
# 检查内存使用
free -h

# 检查磁盘空间
df -h

# 检查 Docker 状态
docker system df
```

## 🚨 紧急修复

如果以上都不行，可以尝试：

1. **使用不同的端口**：
```yaml
ports:
  - "8080:80"  # 改为 8080 端口
```

2. **使用不同的基础镜像**：
```dockerfile
FROM nginx:1.25-alpine  # 使用稳定版本
```

3. **检查防火墙设置**：
```bash
# 检查防火墙状态
sudo ufw status
# 或者
sudo iptables -L
```

## 📞 获取更多信息

如果问题仍然存在，请提供：
1. `docker-compose logs china-pewter-museum` 的输出
2. `docker-compose ps` 的输出
3. 服务器的操作系统版本
4. Docker 版本信息

