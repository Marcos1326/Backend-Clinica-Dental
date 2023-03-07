const appointmentController = {};
const { Appointment, Doctor, Patient } = require("../models");

//Crear citas de Usuario

appointmentController.newAppointment = async (req, res) => {
  try {
    const userId = req.userId;

    const patient = await Patient.findOne({
      where: {
        user_id: userId,
      },
    });

    if (!patient) {
      return res.send("No eres un paciente");
    }

    const { hour, date, doctor_id } = req.body;
    const user = {
      doctor_id: doctor_id,
      patient_id: patient.id,
      hour: hour,
      date: date,
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
    const userId = req.userId;

    const patient = await Patient.findOne({
      where: {
        user_id: userId,
      },
    });

    if (!patient) {
      return res.send("No eres un paciente");
    }

    const { hour, date, app_id } = req.body;

    const appointment = await Appointment.findOne({
        where: { patient_id: patient.id, id: app_id }
    })

    if(!appointment){
        return res.send("No tienes esa cita")
    }

    const updateAppointments = await Appointment.update(
      {
        hour: hour,
        date: date,
      },
      { where: { patient_id: patient.id, id: app_id } }
    );

    if (!updateAppointments) {
      return res.send("Appointment not updated");
    }

    return res.send("Appointment updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Ver citas de Paciente

appointmentController.appointmens = async (req, res) => {
  try {
    const userId = req.userId;

    const patient = await Patient.findOne({
      where: {
        user_id: userId,
      },
    });

    if (!patient) {
      return res.send("No eres un paciente");
    }

    const appointment = await Appointment.findAll({
      where: {
        patient_id: patient.id,
      },
    });

    return res.json(appointment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Borrar una cita de Usuario

appointmentController.deleteAppointmentById = async (req, res) => {
  try {
    const appointmentId = req.params.id;

    const deleteAppointment = await Appointment.destroy({
      where: { id: appointmentId },
    });

    return res.json(deleteAppointment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Ver citas del Doctor

appointmentController.getAppointmentDoctor = async (req, res) => {
  try {
    const userId = req.userId;

    const doctor = await Doctor.findOne({
      where: { user_id: userId },
    });

    if (!doctor) {
      return res.send("No eres un doctor");
    }

    const appointments = Appointment.findAll({
      where: { doctor_id: doctor.id },
    });

    return res.json(appointments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = appointmentController;
