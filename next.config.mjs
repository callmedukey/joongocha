/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        esmExternals: 'loose',
    }, output: 'standalone',
};

export default nextConfig;
