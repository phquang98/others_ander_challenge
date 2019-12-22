// controller: logic that binds our endpoints/routes that we are going to define soon to what action or operation they will perform on an incoming request.

// ..../plantattribute is called API endpoints or API routes
const User = require("../models/User");
const mongoose = require("mongoose");

// HTTP GET req
exports.listAllUsers = (req, res) => {
  User.find({}, (err, docEntry) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(docEntry);
  });
};

exports.createNewUser = (req, res) => {
  let newTask = new User(req.body);
  newTask.save((err, docEntry) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(docEntry);
  });
};

// exports.readUser = (req, res) => {
//   // const id = new mongoose.Types.ObjectId(req.params.plantattributeId);
//   // mongoshell su dung object id voi string type la khac nhau ->
//   User.findById(req.params.userID, (err, task) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).json({ message: "User successfully read!" });
//   });
// };

// exports.updateUser = (req, res) => {
//   User.findOneAndUpdate(
//     { _id: req.params.userID },
//     req.body,
//     { new: true },
//     (err, task) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//       res.status(200).json({ message: "User successfully updated!" });
//     }
//   );
// };

// exports.deleteUser = (req, res) => {
//   PlantAttribute.remove({ _id: req.params.userID }, (err, task) => {
//     if (err) {
//       res.status(404).send(err);
//     }
//     res.status(200).json({ message: "User successfully deleted!" });
//   });
// };
