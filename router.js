const router = require("express").Router();
const authRoutes = require("./views/authRoutes");


router.use("/", authRoutes)

module.exports = router;