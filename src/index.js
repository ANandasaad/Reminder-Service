const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig");

const { sendBasicEmail } = require("./services/email-service");
const setupJobs = require("./utils/job");
const ticketController = require("./controllers/ticket-controller");
const startServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post("/api/v1/tickets", ticketController.create);
  app.listen(PORT, () => {
    console.log("Starting server on port", PORT);

    // setupJobs();
  });
};

startServer();
