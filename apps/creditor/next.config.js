const shouldAnalyzeBundles = !!process.env.ANALYZE;

let nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    externalDir: true,
    esmExternals: true,
  },
};

if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
