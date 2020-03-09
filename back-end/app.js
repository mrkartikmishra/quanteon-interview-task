const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const bookinginfo = require("./routes/bookinginfo");

const app = express();
const PORT = process.env.PORT || 3000;

//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//user route middleware
app.use(bookinginfo);

app.listen(PORT, () => {
  console.log(`APP Server running at PORT ${PORT}`);
});
