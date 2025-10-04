import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typedRoutes: true,
  experimental: {
    typedEnv: true,
    viewTransition: true,
    // @ts-ignore
    // ⬇️ 关键修改：添加 @ts-ignore 忽略类型检查
    runtime: 'experimental-edge', 
  },
};

export default nextConfig;
