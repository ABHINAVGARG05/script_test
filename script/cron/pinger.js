const cron = require("node-cron");
const axios = require("axios");
require('dotenv').config();

const url = process.env.URL
const be_url = process.env.BE_URL

const task = async () => {
  try {
    const response = await axios.get(url);
    await axios.get(be_url)
    console.log("Status: ", response.status)
    console.log(`Route ${url} hit at`, new Date().toLocaleString());
  } catch (err) {
    console.error("Error hitting route:", err.message);
  }
};

cron.schedule("* * * * * *", task);

console.log("Cron job started");
