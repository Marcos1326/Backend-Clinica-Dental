const appointmentController = {}
const {appointment} = require("../models")

appointmentController.newAppointment = async (req, res) => {
    try {
        const { hour,date } = req.body;
        const user = {
            // doctor_id:1,
            // patient_id:5,
            hour: hour,
            date: date
        };
        const users = await appointment.create(user);
        return res.json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = appointmentController;