const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);


require("dotenv").config();

const mongoose = require('mongoose');



const {connectDB} = require("./src/config/db");
const app = require("./src/app");

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGODB_URI);
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

start();