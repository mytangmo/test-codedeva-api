const app = require("express");
const router = app.Router();
const user = require("../controllers/user.controller.js");

router.post("/login", user.login);
router.get("/", user.getAll);
router.post("/create", user.create);

module.exports = router;
