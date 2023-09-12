var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

const userRouter = require("./routes/user.route");

app.use("/user", userRouter);

app.listen(8000, function () {
  console.log("CORS-enabled web server listening on port 8000");
});
