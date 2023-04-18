const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              removeViewBox: false,
              removeDimensions: true
            }
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;
