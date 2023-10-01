const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    const path = req.url;
    const filePath =
      path == "/"
        ? "./index.html"
        : path == "/about"
        ? "./about.html"
        : path == "/contact-me"
        ? "./contact-me.html"
        : "./404.html";

    fs.readFile(filePath, function (err, html) {
      if (filePath == "./404.html") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(html);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
      }

      res.end();
    });
  })
  .listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
  });
