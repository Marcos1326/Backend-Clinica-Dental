const adminController = {}
const {User, Appointment, Role, specialty} = require("../models")

//Ver todos los usuarios Admin

adminController.getUsers = async(req, res)=> {
    try {
        const viewUsers = await User.findAll()

        return res.json(viewUsers)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

adminController.delUser = async (req,res) => {
    try {
        
        const { id } = req.params

        const userFound = await User.findOne({
            where: {id: id}
        })

        console.log(userFound)

        if(userFound.roles_id === 1){
            return res.send("No puedes eliminar un administrador")
        }

        const delUser = await User.destroy(
            {
                where: {id:id}
            }
        )

        return res.send("usuario eliminado")

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
        const { id, name } = req.body

        const newRol = await Role.update(
            {
                name: name,
            },
            {
                where: {id:id}
            }
        )

        return res.json(newRol)
    } catch (error) {
        return res.status(500).json(error)
    }
}

adminController.deleteRole = async (req,res) => {
    try {
        const { id } = req.params

        const newRol = await Role.destroy(
            {
                where: {id: id}
            }
        )
        if(!newRol){
            return res.send('No hay registo')
        }

        return res.send('registro eliminado')
    } catch (error) {
        return res.status(500).json(error)
    }
}


adminController.getAllRole = async (req,res) => {
    try {
        const { name } = req.body

        const newRol = await Role.findAll()
        return res.json(newRol)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = adminController;