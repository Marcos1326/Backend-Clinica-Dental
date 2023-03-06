const appointmentController = {}
const {Appointment, Doctor} = require("../models")

//Crear citas de Usuario

appointmentController.newAppointment = async (req, res) => {
    try {
        // const userId = req.patient_id



        const { hour,date } = req.body;
        const user = {
            doctor_id:req.body.doctor_id,
            patient_id: req.body.patient_id,
            hour: hour,
            date: date
        };
        const appointment = await Appointment.create(user);
        return res.json(appointment);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Modificar citas de Usuario

appointmentController.updateAppointment = async (req, res) => {
    try {
        const { hour,date } = req.body;
        const userId = req.userId;

        const updateAppointments = await Appointment.update({
            doctor_id:1,
            hour: hour,
            date: date
        },
        {where:{id:userId}})

        if(!updateAppointments){
            return res.send("Appointment not updated")
        }

        return res.send("Appointment updated");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// Ver citas de Usuario

appointmentController.appointmens = async(req, res)=>{
    try {
        const appointmens = await Appointment.findAll()

        return res.json(appointmens)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Borrar una cita de Usuario

appointmentController.deleteAppointmentById = async(req, res)=>{
    try {
        const appointmentId = req.params.id;

        const deleteAppointment = await Appointment.destroy({where: {id: appointmentId}})

        return res.json(deleteAppointment);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

appointmentController.getAppointmentDoctor = async(req, res)=>{
    try {

        const userId = req.userId;

        const doctor = await Doctor.findOne({
            where: {user_id: userId}
        })

        if(!doctor){
            return res.send("No eres un doctor");
        }

        const appointments = Appointment.findAll({
            where: {doctor_id: doctor.id}
        })

        return res.json(appointments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = appointmentController;