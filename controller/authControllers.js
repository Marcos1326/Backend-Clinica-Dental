const authControllers = {}
const {User, Patient} = require("../models")
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

authControllers.create = async(req, res)=>{
    try {
        const {name, surname, phone, email, password} = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create ({
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            password: encryptedPassword,
            roles_id: 3
        })

        const newPatient = await Patient.create({
            user_id: newUser.id
        })

        return res.json(newUser, newPatient)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = authControllers;