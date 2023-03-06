const authControllers = {}
const {User, Patient} = require("../models")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Registro de Usuarios

authControllers.newUser = async (req, res) => {
    try {
        const { name, surname, phone, email, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const user = {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            password: encryptedPassword,
            roles_id: 3
        }
        const users = await User.create(user);

        await Patient.create(
            {
                user_id: users.id,
                city: "Valencia"
            }
            
            )

        return res.json(users);
    } catch (error) {
        return res.status(500).send(error);
    }
};

//Login de Usuarios

authControllers.login =async (req,res) => {
    try {
        
        const { email, password, } = req.body;
        const user = await User.findOne(
            {
            where: {
            email: email,
            },
        }
        );
        if (!user) {
            return res.send("Wrong User");
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.send("Wrong credentials");
        }
        const token = jwt.sign(
            {
            userId: user.id,
            email: user.email,
            roleId: user.role_id,
            },
            "secreto",
            { expiresIn: "2h" }
        );
        return res.json(token);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//Perfil de Usuario

authControllers.profile = async(req, res)=>{
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId)

        return res.json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//Cambiar datos Usuario

authControllers.updateProfile = async(req, res)=>{
    try {
        const {name, surname, phone, email, password} = req.body;
        const userId = req.userId;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateProfile = await User.update({
            name,
            surname,
            phone,
            email,
            password: encryptedPassword
        },
        {where: {id:userId}})

        if(!updateProfile){
            return res.send("Profile not updated")
        }

        return res.send("Profile updated")

    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = authControllers;
