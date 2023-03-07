const adminController = require("../controller/adminController")
const verifyToken = require("../middleware/verifyToken")
const isAdmin = require("../middleware/isAdmin")
const router = require("express").Router()


router.get("/adminuser",verifyToken, isAdmin,adminController.getUsers)
router.get("/adminappointments", verifyToken, isAdmin, adminController.getAppointments)
router.post("/admin-createrole", verifyToken, isAdmin, adminController.createRole)
router.post("/admin-updaterole", verifyToken, isAdmin, adminController.updateRole)
router.post("/admin-deleterole", verifyToken, isAdmin, adminController.deleteRole)
router.post("/admin-getallrole", verifyToken, isAdmin, adminController.getAllRole)

module.exports = router;