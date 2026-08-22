require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const contactform = require("./routes/contactform");

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://platform.marvmedia.ng"], // allow both
//   })
// );
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/contactform", contactform);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
