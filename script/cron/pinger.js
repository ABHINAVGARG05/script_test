const cron = require("node-cron");
const axios = require("axios");
require('dotenv').config();

const url = process.env.URL

const task = async () => {
  try {
    await axios.get(url);
    console.log(`Route ${url} hit at`, new Date().toLocaleString());
  } catch (err) {
    console.error("Error hitting route:", err.message);
  }
};

cron.schedule("* * * * * *", task);

console.log("Cron job started");
