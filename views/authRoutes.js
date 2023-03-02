const authControllers = require("../controller/authControllers")

const router = require("express").Router();

router.post("/register", authControllers.create);

module.exports = router;