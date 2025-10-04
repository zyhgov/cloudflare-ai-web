import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typedRoutes: true,
  experimental: {
    typedEnv: true,
    viewTransition: true,
    // ⬇️ 关键修改：添加这一行，强制所有动态路由使用 Edge Runtime
    runtime: 'experimental-edge', 
  },
};

export default nextConfig;
