const authControllers = {}
const {User} = require("../models")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

authControllers.login = async(req,res)=>{
    try {
        const { email, password } = req.body;

        const user = await User.findAll({email: email});

        if (!user) {
            return res.send('Wrong Credentials')
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.send('Wrong Credentials password')
        }

        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                roleId: user.role_id
            },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        return res.json(
            {
                success: true,
                message: "Login successfully",
                token: token
            }
        )
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = authControllers;