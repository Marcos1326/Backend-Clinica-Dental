const adminController = {}
const {User, Appointment} = require("../models")

//Ver todos los usuarios Admin

adminController.getUsers = async(req, res)=> {
    try {
        const viewUsers = await User.findAll()

        return res.json(viewUsers)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//Ver todas las citas Admin

adminController.getAppointments = async(req, res)=>{
    try {
        const appointmens = await Appointment.findAll()

        return res.json(appointmens)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = adminController;