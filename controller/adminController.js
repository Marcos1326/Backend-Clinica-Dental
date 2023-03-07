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


adminController.createRole = async (req,res) => {
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

adminController.updateRole = async (req,res) => {
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

adminController.deleteRole = async (req,res) => {
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


adminController.getAllRole = async (req,res) => {
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