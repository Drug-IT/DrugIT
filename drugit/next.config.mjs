/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pubchem.ncbi.nlm.nih.gov',
                port: '',
                pathname: '/rest/pug/compound/smiles/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
