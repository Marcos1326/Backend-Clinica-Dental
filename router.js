const router = require("express").Router();
const authRoutes = require("./views/authRoutes");
const appointRoutes = require("./views/appointRoutes")
const adminRoutes = require("./views/adminRoutes")


router.use("/", authRoutes)
router.use("/", appointRoutes)
router.use("/",adminRoutes)


module.exports = router;