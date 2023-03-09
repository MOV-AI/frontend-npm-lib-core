const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const serveStatic = require('serve-static')
const app = express();


app.use(serveStatic(path.join(__dirname, "../")));
app.use(
    createProxyMiddleware(
      [
        "/token-auth/**",
        "/api/**",
        "/token-verify/**",
        "/token-refresh/**",
        "/domains/**",
        "/ws/**",
        "/logout/**",
        "/static/maps/**",
        "/static/meshes/**",
        "/static/point_clouds/**"
      ],
      {
        target: "https://localhost",
        ws: true,
        logLevel: "debug",
        secure: false
      }
    )
  );

app.listen(3030);