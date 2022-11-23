const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userControllers");
// Calling in the users.
router.route("/").get(getUsers).post(createUser);
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);
// Calling in the friends.
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
module.exports = router;
