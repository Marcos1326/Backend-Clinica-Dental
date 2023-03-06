const adminController = require("../controller/adminController")
const verifyToken = require("../middleware/verifyToken")
const isAdmin = require("../middleware/isAdmin")
const router = require("express").Router()


router.get("/adminuser",verifyToken, isAdmin,adminController.getUsers)
router.get("/adminappointments", verifyToken, isAdmin, adminController.getAppointments)

module.exports = router;