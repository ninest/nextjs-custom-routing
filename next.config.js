module.exports = {
  pageExtensions: ["page.js", "api.js"],
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/signup",
        destination: "/auth/signup",
      },
      {
        source: "/api/auth",
        destination: "/auth/auth",
      },
    ];
  },
};
