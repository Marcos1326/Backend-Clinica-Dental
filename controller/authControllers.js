const authControllers = {}
const {User} = require("../models")
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


        return res.json(newUser)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = authControllers;