const adminController = require("../controller/adminController")
const verifyToken = require("../middleware/verifyToken")
const isAdmin = require("../middleware/isAdmin")
const router = require("express").Router()


router.get("/adminuser",verifyToken, isAdmin,adminController.getUsers)
router.get("/adminappointments", verifyToken, isAdmin, adminController.getAppointments)
router.post("/admin-createrol", verifyToken, isAdmin, adminController.createRol)
router.post("/admin-updaterol", verifyToken, isAdmin, adminController.updateRol)

module.exports = router;