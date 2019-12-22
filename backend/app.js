// Import 3rd party modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/db"); // import db

// Import custom modules
const routing = require("./routes/routes");

// Initiate the server
const app = express();

// Enable CORS
app.use(cors());

// Define the port (default is 3301)
const port = process.env.PORT || 3301;

// parses incoming HTTP requests as middleware under req.body before routes or API have access to them and perform any further actions on them
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Endpoints: use Routing logic -> Controller logic
app.get("/", (req, res) => {
  res.send(
    "This is the default page for Anders code challenge. Go to /user for viewing data."
  );
});
app.use("/user", routing);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
