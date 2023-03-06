const appointmentController = require("../controller/appointmentControlller")
const verifyToken = require("../middleware/verifyToken")
const router = require("express").Router()

//Creacion de cita
router.post('/appointment', verifyToken ,appointmentController.newAppointment)
router.put("/appointment", verifyToken,appointmentController.updateAppointment)
router.get("/appointment", verifyToken, appointmentController.appointmens)

module.exports = router;