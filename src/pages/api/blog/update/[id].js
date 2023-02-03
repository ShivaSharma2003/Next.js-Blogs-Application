import expressAsyncHandler from 'express-async-handler'
import BlogSchema from 'Model/BlogModal'
import DatabaseBaseConnection from 'Utils/mongoDB'
import authRoute from 'MiddleWare/AuthRoute'

const UpdateBlog = expressAsyncHandler(async (req, res) => {
    const { id } = req.query
    const requestMethod = req.method
    const { title, description, image, content } = req.body
    if (requestMethod === "PUT") {
        try {
            const blog = await BlogSchema.findById(id)
            if (blog) {
                if (blog.userId === req.user) {
                    await BlogSchema.updateOne({ _id: id }, { title: title, description: description, image: image, content: content })
                    res.status(200).json({ Message: "Successfully Updated" })
                } else {
                    res.status(403).json({ errorMessage: "Not Authorized" })
                }
            } else {
                res.status(404).json({ errorMessage: "Blog Not Found" })
            }
        } catch (error) {
            res.status(500).json({ errorMessage: "Internal Server Error" , error : error.message })
        }

    } else {
        res.status(400).json({ errorMessage: "Invalid Request" })
    }
})

export default authRoute(DatabaseBaseConnection(UpdateBlog))