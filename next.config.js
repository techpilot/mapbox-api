const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: config => {
    // Optional: Enables reading mapbox token from environment variable
    config.plugins.push(new webpack.EnvironmentPlugin({MapboxAccessToken: 'pk.eyJ1IjoiY2lwaGVyMDEiLCJhIjoiY2xnMzVvZXA1MGNmMDNzcHRjNmxnMHBqZyJ9.7_AMShwyXb_lsQI26LOUZw'}));
    return config;
  }
}

module.exports = nextConfig
