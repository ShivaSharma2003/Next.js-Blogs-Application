import DatabaseConnection from 'Utils/mongoDB';
import UserSchema from "Model/UserModal"

const registerUser = async (req, res) => {
    const { userName, email, password, Avatar, isBlogger } = req.body;
    const requestMethod = req.method;
    if (requestMethod === "POST") {
        const existUser = await UserSchema.findOne({ email: email })
        if (existUser) {
            return res.status(400).json({ errorMessage: "User Already Exist" })
        }
        const user = await new UserSchema(
            {
                userName: userName,
                email: email,
                password: password,
                Avatar: Avatar,
                isBlogger: isBlogger
            }
        )
        const newUser = await user.save()
        if (newUser) {
            return res.status(200).json({ message: "User Registered Successfully", user: newUser })
        } else {
            return res.status(400).json({ errorMessage: "User Registration Failed" })
        }
    }
}
export default DatabaseConnection(registerUser)