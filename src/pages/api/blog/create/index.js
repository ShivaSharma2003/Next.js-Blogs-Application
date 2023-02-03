import expressAsyncHandler from "express-async-handler"
import DatabaseBaseConnection from "Utils/mongoDB"
import authRoute from "MiddleWare/AuthRoute"
import BlogSchema from 'Model/BlogModal'


const createBlog = expressAsyncHandler(async (req, res) => {
    const reqMethod = req.method
    const { title, description, image, content } = req.body
    if (reqMethod === "POST") {
        const blog = await new BlogSchema({
            title: title,
            description: description,
            image: image,
            userId: req.user,
            content: content
        })
        try {
            const newBlog = await blog.save()
            if (newBlog) {
                res.status(200).json(newBlog)
            } else {
                res.status(500).json({ errorMessage: "Intenal Server Error" })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(400).json({ errorMessage: "Request Failed" })
    }
})

export default authRoute(DatabaseBaseConnection(createBlog))