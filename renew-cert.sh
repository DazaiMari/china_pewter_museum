#!/bin/bash

# Let's Encrypt 证书续期脚本
# 用于手动续期证书（自动续期由 certbot 容器处理）

set -e

echo "### 开始续期证书 ..."

# 使用 certbot 容器续期证书
docker-compose run --rm certbot renew

# 重新加载 Nginx 配置
echo "### 重新加载 Nginx 配置 ..."
docker-compose exec china-pewter-museum nginx -s reload

echo "### 证书续期完成！"

