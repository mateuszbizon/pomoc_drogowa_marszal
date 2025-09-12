import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    async redirects() {
        return [
            {
                source: "/auto-laweta",
                destination: "/uslugi/auto-laweta-zgorzelec",
                permanent: true,
            },
            {
                source: "/wulkanizacja-kol",
                destination: "/uslugi/naprawa-kol-zgorzelec",
                permanent: true,
            },
            {
                source: "/serwis-klimatyzacji",
                destination: "/uslugi/serwis-klimatyzacji-zgorzelec",
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
