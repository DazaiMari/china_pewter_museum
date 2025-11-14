import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 环境变量配置
  // 在 .env 文件中设置 VITE_CDN_URL 来配置 CDN 域名
  // 例如: VITE_CDN_URL=https://cdn.example.com
  envPrefix: 'VITE_', // 只有以 VITE_ 开头的环境变量才会暴露给客户端
});
