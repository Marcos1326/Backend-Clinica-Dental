const appointmentController = require("../controller/appointmentControlller")
const verifyToken = require("../middleware/verifyToken")
const router = require("express").Router()

//Creacion de cita
router.post('/appointment', verifyToken ,appointmentController.newAppointment)
router.put("/appointment", verifyToken,appointmentController.updateAppointment)
router.get("/appointment", verifyToken, appointmentController.appointmens)
router.delete("/appointment/:id", verifyToken, appointmentController.deleteAppointmentById)
router.get("/appointmentDr", verifyToken, appointmentController.getAppointmentDoctor)

module.exports = router;