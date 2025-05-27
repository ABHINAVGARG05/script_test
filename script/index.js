const express = require('express');
require("./cron/pinger")
const app = express();

app.get("/",(req, res)=> {
    console.log("cron job working")
    return res.status(200).json({message:"cron job hit"})
})

app.listen("3000", (req,res)=> {
    console.log("server running on 3000");
})