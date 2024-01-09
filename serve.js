const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

// Define the endpoint for the webservice
app.get("/webservice", (req, res) => {
  // Return a response message
  res.send("Hello from my simple webservice!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/css/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/css/styles.css"));
});

app.get("/js/logic.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/js/logic.js"));
});

app.get("/api/questions", (req, res) => {
  const questionsPath = path.join(__dirname + "/js/questions.json");
  fs.readFile(questionsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading questions file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(data);
  });
});

// Start the server
const port = 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));
