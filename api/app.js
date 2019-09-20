const express = require("express");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const exec = require("child_process").exec;
require("dotenv").config();

const app = express();
app.use(cors("*"));
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../view/out")));

const port = process.env.PORT || "3000";
const http = require("http").Server(app);
http.listen(port, () => console.log(`listening on port ${port}`));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "upload");
  },
  filename: function(req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
    console.log("trying to print: " + fileName);
    exec(`lp ./upload/${fileName}`, (error, stdout, stderr) => {
      error ? console.log("Error: " + error) : null;
      stdout ? console.log("stdout: " + stdout) : null;
      stderr ? console.log("stderr: " + stderr) : null;
    });
  }
});

const upload = multer({ storage: storage }).single("file");

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

module.exports = app;
