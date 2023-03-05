const { verify } = require("jsonwebtoken");
const authControllers = require("../controller/authControllers");
const verifyToken = require("../middleware/verifyToken");
const appointmentController = require("../controller/appointmentControlller")

const router = require("express").Router();

router.post("/register", authControllers.newUser);
router.post('/login', authControllers.login)
router.get("/profile",verifyToken, authControllers.profile)
router.put("/updateprofile",verifyToken,authControllers.updateProfile)
router.post('/appointment', appointmentController.newAppointment)


module.exports = router;