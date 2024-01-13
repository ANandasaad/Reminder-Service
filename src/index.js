const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig");

const setupJobs = require("./utils/job");
const { createChannel } = require("./utils/messageQueue");
const ticketController = require("./controllers/ticket-controller");
const startServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const channel = await createChannel();
  app.post("/api/v1/tickets", ticketController.create);
  app.listen(PORT, () => {
    console.log("Starting server on port", PORT);

    // setupJobs();
  });
};

startServer();
