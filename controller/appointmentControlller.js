const appointmentController = {}
const {appointment} = require("../models")
const jwt = require('jsonwebtoken');

appointmentController.newAppointment = async (req, res) => {
    try {
        const { doctor_id,patient_id,hour,date } = req.body;
        const user = {
            doctor_id:doctor_id,
            patient_id:patient_id,
            hour: hour,
            date: date
        };
        const users = await appointment.create(user);
        return res.json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = authControllers;