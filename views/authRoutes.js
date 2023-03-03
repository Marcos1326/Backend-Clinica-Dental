const authControllers = require("../controller/authControllers")

const router = require("express").Router();

router.post("/register", authControllers.create);
router.post('/login', authControllers.login)

module.exports = router;