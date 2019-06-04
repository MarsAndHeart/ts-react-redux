const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/mock", { target: "http://0.0.0.0:7300", changeOrigin: true }));
};
