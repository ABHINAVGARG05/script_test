const express = require('express');
require("./cron/pinger")
const app = express();


app.listen("3000", (req,res)=> {
    console.log("server running on 3000");
})