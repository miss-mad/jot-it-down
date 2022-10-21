const express = require("express");
const app = express();
const path = require("path");
// the port we want the app to listen to
const PORT = 3001;

// tells express that the public folder is a static folder that should only be used for GET requests
// also where we'll send over files from (html, css, images) all in public folder
app.use(express.static("public"));

// defines the main/default route
app.get("/", (req, res) => {
  res.send(); // goes to public folder and gets html file
});

// route for sending, also a GET request that sends an html file
app.get("/send", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html")); // sending index.html. need to send notes.html?
});

// another GET request, sending another html file
app.get("/routes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/routes.html"));
});

// starts the server by listening at the PORT #
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}!`);
});
