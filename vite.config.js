import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ 彻底版配置：强制全页刷新 + 热更新双保险
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'full-reload-on-tsx-change',
            handleHotUpdate({ file, server }) {
                if (/\.(tsx|jsx|ts|js)$/.test(file)) {
                    console.log('🔁 全局刷新触发：', file)
                    server.ws.send({ type: 'full-reload' })
                }
            },
        },
    ],
    server: {
        host: 'localhost',
        port: 5173,
        strictPort: true,
        watch: {
            usePolling: true,
            interval: 200, // 每200ms检测变化
        },
        hmr: {
            overlay: true,
            timeout: 30000,
        },
    },
    optimizeDeps: {
        force: true,
    },
    clearScreen: false,
})
