const router = require("express").Router();
const authRoutes = require("./views/authRoutes");
const appointRoutes = require("./views/appointRoutes")


router.use("/", authRoutes)
router.use("/", appointRoutes)

module.exports = router;