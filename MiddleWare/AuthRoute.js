import jwt from 'jsonwebtoken'

const authRoute = async (req, res) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded.id
        } catch (error) {
            return res.status(401).json({ errorMessage: "Not Authorized, Token Failed" })
        }
    } else {
        return res.status(401).json({ errorMessage: "Token Not Found" })
    }
}