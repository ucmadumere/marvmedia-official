const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const contactform = require("./routes/contactform")
require("dotenv").config();

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://platform.marvmedia.ng"], // allow both
  })
);
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/contactform", contactform);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
