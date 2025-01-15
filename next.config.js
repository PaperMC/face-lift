const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");
const childProcess = require("child_process");

let currentCommit;
try {
  currentCommit = childProcess.execSync("git rev-parse HEAD").toString().slice(0, 7).trim();
} catch (error) {
  console.error("Failed to get the current commit:", error);
  currentCommit = "unknown";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CURRENT_COMMIT: currentCommit
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { dimensions: false },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;