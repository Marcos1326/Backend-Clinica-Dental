const appointmentController = require("../controller/appointmentControlller")
const verifyToken = require("../middleware/verifyToken")
const router = require("express").Router()


router.post('/appointment', verifyToken ,appointmentController.newAppointment)

module.exports = router;