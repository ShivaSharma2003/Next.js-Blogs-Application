import jwt from 'jsonwebtoken'
import UserModel from 'Model/UserModal'

const authRoute = handler => async (req, res) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded.id
            handler(req,res)
        } catch (error) {
            return res.status(401).json({ error: error.message })
        }
    } else {
        return res.status(401).json({ errorMessage: "Token Not Found" })
    }
}

export default authRoute;