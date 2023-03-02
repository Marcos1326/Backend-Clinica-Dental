const {User} = require("../models")
const userController = {}

userController.createUser = async(req, res)=>{
    try {
        const {name, surname, phone, email} = req.body;

        const newUser = {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            roles_id: 3
        }

        const user = await User.create(newUser)
        return res.json(user)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = userController;