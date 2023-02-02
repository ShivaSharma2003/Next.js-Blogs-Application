import DatabaseBaseConnection from "Utils/mongoDB";
import UserSchema from "Model/UserModal";
import {GenerateToken} from 'token/GenerateToken'

const loginUser = async (req, res) => {
    const { email, password } = req.body
    const requestMethod = req.method
    if (requestMethod === "POST") {
        const user = await UserSchema.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ errorMessage: "User not found" })
        }
        if (user && (await user.comparePassword(password))) {
            return res.status(200).json({
                message: "Login Successful", Credentials: {
                    userId: user._id,
                    token: GenerateToken(user._id)
                }
            })
        }
    }
}

export default DatabaseBaseConnection(loginUser)