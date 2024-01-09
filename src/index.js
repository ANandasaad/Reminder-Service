const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig");

const { sendBasicEmail } = require("./services/email-service");
const cron = require("node-cron");
const startServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log("Starting server on port", PORT);
    // sendBasicEmail(
    //   "support@example.com",
    //   "sijofo4557@taobudao.com",
    //   "this is a testing email",
    //   "Hey,How are you , I hope you like the support"
    // );
    // cron.schedule("*/2 * * * *", () => {
    //   console.log("running a task every two minutes");
    // });
  });
};

startServer();
