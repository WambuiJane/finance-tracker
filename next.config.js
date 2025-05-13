const ContentSecurityPolicy = `
  default-src 'self' https://*.apollographql.com;
  script-src 'self' 'unsafe-inline' 'unsafe-eval'  https://*.clarity.ms https://www.googletagmanager.com https://*.apollographql.com *.google.com https://www.google-analytics.com *.doubleclick.net;
  connect-src *;
  img-src 'self' data: https://*.apollographql.com ;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' data: https://fonts.googleapis.com https://fonts.gstatic.com;
  media-src 'self' https://res.cloudinary.com ;
  frame-src 'self' *.google.com https://*.apollographql.com https://www.google-analytics.com https://www.youtube.com;
`;

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "unsafe-none",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "unsafe-none",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "unsafe-none",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  { key: "Permissions-Policy", value: "interest-cohort=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=3600; includeSubDomains",
  },
];

const apiSecurityHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "http://0.0.0.0:3000,",
  },
];

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/api/:path*",
        headers: apiSecurityHeaders,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
