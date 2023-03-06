
const isAdmin = (req, res, next)=>{
    try {
        if(req.roleId !== 1){
            return res.send("No tienes permisos de Admin")
        }
        
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = isAdmin;