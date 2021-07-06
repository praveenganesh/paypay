const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const next = require("next");
const cookieParser = require("cookie-parser");
// const morgan = require('morgan');
const dotenv = require("dotenv");
dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apiKey = "da8683f1272def6b5fe8e0f73215ef80f2616";

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());
    server.use(express.bodyParser());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());

    server.get("/api/users", (req, res) => {
      const url = `https://paypay-40d4.restdb.io/rest/actors`;
      const requestBody = { headers: { "x-apikey": apiKey }, url };
      request.get(requestBody, (error, response, body) => {
        res.writeHead(response.statusCode);
        res.end(body);
      });
    });
    server.get("/api/feedbacks", (req, res) => {
      const url = `https://paypay-40d4.restdb.io/rest/feedbacks`;
      const requestBody = { headers: { "x-apikey": apiKey }, url };
      request.get(requestBody, (error, response, body) => {
        res.writeHead(response?.statusCode || 500);
        res.end(body);
      });
    });

    server.put("/api/update-feedback", (req, res) => {
      let r = { ...req.body };
      delete r["_id"];
      const url = `https://paypay-40d4.restdb.io/rest/feedbacks/${req.body._id}`;

      const options = {
        url: url,
        json: true,
        headers: { "x-apikey": apiKey },
        body: { ...r },
      };

      request.put(options, (error, response, body) => {
        res.writeHead(204);
        res.end();
      });
    });

    server.post("/api/user", (req, res) => {
      let r = { ...req.body };
      const url = `https://paypay-40d4.restdb.io/rest/actors`;

      const options = {
        url: url,
        json: true,
        headers: { "x-apikey": apiKey },
        body: { ...r },
      };
      request.post(options, (error, response, body) => {
        res.writeHead(200);
        res.end();
      });
    });

    server.post("/api/feedback", (req, res) => {
      let r = { ...req.body };
      const url = `https://paypay-40d4.restdb.io/rest/feedbacks`;

      const options = {
        url: url,
        json: true,
        headers: { "x-apikey": apiKey },
        body: { ...r },
      };
      request.post(options, (error, response, body) => {
        res.writeHead(200);
        res.end();
      });
    });

    // * with this you can add some SSR logic //
    // server.get("/form", async (req, res) => {
    //   app.render(req, res, "/form", {});
    // });

    // server.use(morgan('combined', { stream: logger.stream }));
    server.get("*", (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      console.log("listenig on port 3000");
      if (err) throw err;
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
