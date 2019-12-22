// Import 3rd party modules
const Router = require("express").Router;
const router = Router();

// Import custom modules
const UserController = require("../controller/UserController");

// API Endpoints _/user/ -----

router.get("/", UserController.listAllUsers); // GET HTTP req to get all the documents in the  collections

router.post("/", UserController.createNewUser); // POST HTTP req to create a new document based from the form

module.exports = router;
