const appointmentController = {}
const {Appointment} = require("../models")

appointmentController.newAppointment = async (req, res) => {
    try {
        const { hour,date } = req.body;
        const user = {
            doctor_id:1,
            // patient_id:4,
            hour: hour,
            date: date
        };
        const appointment = await Appointment.create(user);
        return res.json(appointment);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = appointmentController;