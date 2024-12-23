const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/connect");
const user = require("./routes/user.route");

app.use(express.json());

// Routes
app.use("/api/v1", user);


// Creating port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
