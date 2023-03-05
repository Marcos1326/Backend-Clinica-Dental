const { verify } = require("jsonwebtoken");
const authControllers = require("../controller/authControllers");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post("/register", authControllers.newUser);
router.post('/login', authControllers.login)

module.exports = router;