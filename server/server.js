const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const datesRoutes = require("./routes/datesroutes");
const {url} = require('./config')

const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.use("/dates", datesRoutes);

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => `DB connection error: ${err}`);
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
