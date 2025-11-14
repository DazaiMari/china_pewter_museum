/// <reference types="vite/client" />

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.gif";
declare module "*.svg";
declare module "*.webp";
declare module "*.mp4";

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // CDN 配置
    readonly VITE_CDN_URL?: string;
    // 你可以在这里声明更多环境变量，例如：
    // readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

