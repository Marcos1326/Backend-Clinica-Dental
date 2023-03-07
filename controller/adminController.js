const adminController = {}
const {User, Appointment, Role} = require("../models")

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


adminController.createRol = async (req,res) => {
    try {
        // const name = req.body.name
        const { name } = req.body

        const newRol = await Role.create(
            {
                name: name,
            }
        )

        return res.json(newRol)
    } catch (error) {
        return res.status(500).json(error)
    }
}

adminController.updateRol = async (req,res) => {
    try {
        const { name } = req.body

        const newRol = await Role.update(
            {
                name: name,
            }
        )

        return res.json(newRol)
    } catch (error) {
        return res.status(500).json(error)
    }
}

adminController.deleteRol = async (req,res) => {
    try {
        const { name } = req.body

        const newRol = await Role.destroy(
            {
                name: name,
            }
        )

        return res.json(newRol)
    } catch (error) {
        return res.status(500).json(error)
    }
}


adminController.getAllRol = async (req,res) => {
    try {
        const { name } = req.body

        const newRol = await Role.findAll(
            {
                name: name,
            }
        )

        return res.json(newRol)
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = adminController;