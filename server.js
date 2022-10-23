const express = require("express");
const app = express();
const path = require("path");
// the port we want the app to listen to
const PORT = 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// route to send back json
// express is listening to /api specifically for GET
// when it GETs something, it calls the function we give it and then pass it the request and the response
// express will build the request object and the response object and give it to us
app.get("/api", (req, res) => {
  res.json({ term: "api", description: "definition" });
});

// starts the server by listening at the PORT #
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}!`);
});
