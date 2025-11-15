#!/bin/bash

# Let's Encrypt 证书初始化脚本
# 用于首次获取 SSL 证书

set -e

# 配置变量
domains="pewtermuseum.org www.pewtermuseum.org"
rsa_key_size=4096
data_path="./certbot"
email="your-email@example.com" # 请修改为您的邮箱地址
staging=0 # 设置为 1 使用测试环境，0 使用生产环境

echo "### Let's Encrypt 证书初始化脚本"
echo "### 域名: $domains"
echo "### 邮箱: $email"
echo ""

# 检查邮箱是否已修改
if [ "$email" = "your-email@example.com" ]; then
  echo "错误: 请先编辑此脚本，将邮箱地址修改为您的真实邮箱！"
  exit 1
fi

# 创建必要的目录
echo "### 创建证书目录 ..."
mkdir -p "$data_path/conf"
mkdir -p "$data_path/www"

# 检查是否已有证书
if [ -d "$data_path/conf/live/pewtermuseum.org" ]; then
  read -p "已有证书存在，是否重新获取？(y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    echo "已取消操作"
    exit 0
  fi
  echo "### 删除旧证书 ..."
  rm -rf "$data_path/conf/live/pewtermuseum.org"
fi

# 先启动 Nginx 容器（用于验证）
echo "### 启动 Nginx 容器（用于验证）..."
docker-compose up -d china-pewter-museum

# 等待容器启动
echo "### 等待容器启动..."
sleep 5

# 获取证书
echo "### 开始获取证书 ..."
if [ "$staging" != "0" ]; then
  echo "### 使用测试环境（staging）..."
  docker-compose run --rm --entrypoint "\
    certbot certonly --webroot -w /var/www/certbot \
      --email $email \
      -d pewtermuseum.org \
      -d www.pewtermuseum.org \
      --rsa-key-size $rsa_key_size \
      --agree-tos \
      --staging" certbot
else
  echo "### 使用生产环境..."
  docker-compose run --rm --entrypoint "\
    certbot certonly --webroot -w /var/www/certbot \
      --email $email \
      -d pewtermuseum.org \
      -d www.pewtermuseum.org \
      --rsa-key-size $rsa_key_size \
      --agree-tos" certbot
fi

# 验证证书文件
if [ -f "$data_path/conf/live/pewtermuseum.org/fullchain.pem" ]; then
  echo ""
  echo "### ✅ 证书获取成功！"
  echo "### 证书位置: $data_path/conf/live/pewtermuseum.org/"
  echo ""
  echo "### 现在启动完整的服务（包括自动续期）："
  echo "docker-compose up -d"
  echo ""
  echo "### 启动自动续期服务："
  echo "docker-compose up -d certbot"
else
  echo ""
  echo "### ❌ 证书获取失败，请检查错误信息"
  exit 1
fi

