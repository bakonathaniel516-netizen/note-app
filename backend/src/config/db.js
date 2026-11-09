// require("dotenv").config();
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB connected");
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) {
    throw new Error('MONGODB_URI is not set. Add it to your .env file.');
  }

  mongoose.connection.on('connected', () => console.log('✅ MongoDB connected'));
  mongoose.connection.on('error', (err) => console.error('MongoDB error:', err.message));
  mongoose.connection.on('disconnected', () => console.warn('⚠️  MongoDB disconnected'));

  await mongoose.connect(uri);
  return mongoose.connection;
}

module.exports = { connectDB };