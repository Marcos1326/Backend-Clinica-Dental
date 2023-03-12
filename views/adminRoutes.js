const adminController = require("../controller/adminController")
const verifyToken = require("../middleware/verifyToken")
const isAdmin = require("../middleware/isAdmin")
const router = require("express").Router()


router.get("/adminuser",verifyToken, isAdmin,adminController.getUsers)
router.get("/adminappointments", verifyToken, isAdmin, adminController.getAppointments)

router.post("/admin-createrole", verifyToken, isAdmin, adminController.createRole)
router.put("/admin-updaterole", verifyToken, isAdmin, adminController.updateRole)
router.delete("/admin-deleterole/:id", verifyToken, isAdmin, adminController.deleteRole)
router.get("/admin-getallrole", verifyToken, isAdmin, adminController.getAllRole)

router.post("/admin-createspecialty", verifyToken, isAdmin, adminController.createSpecialty)
router.put("/admin-updatespecialty", verifyToken, isAdmin, adminController.updateSpecialty)
router.delete("/admin-deletespecialty/:id", verifyToken, isAdmin, adminController.deleteSpecialty)
router.get("/admin-getallspecialty", verifyToken, isAdmin, adminController.getAllSpecialty)

module.exports = router;