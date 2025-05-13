import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/docs',
                destination: '/docs/index.html',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
