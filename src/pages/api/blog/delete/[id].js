import expressAsyncHandler from 'express-async-handler'
import BlogSchema from 'Model/BlogModal'
import authRoute from 'MiddleWare/AuthRoute'
import DatabaseBaseConnection from 'Utils/mongoDB'

const DeleteBlog = expressAsyncHandler(async (req, res) => {
    const { id } = req.query
    const requestMethod = req.method
    if (requestMethod === 'DELETE') {
        try {
            const blog = await BlogSchema.findById(id)
            if (blog) {
                if (req.user === blog.userId) {
                    await BlogSchema.deleteOne({ _id: id })
                    res.status(200).json({ Message: "Blog Delete Successfully" })
                } else {
                    res.status(403).json({ errorMessage: "Not Authorized to perform this action" })
                }
            } else {
                res.status(404).json({ errorMessage: "Blog Not Found" })
            }
        } catch (error) {
            res.status(500).json({ errorMessage: "Internal Server Error", error: error.message })
        }
    } else {
        res.status(400).json({ errorMessage: "Invalid Request" })
    }
})

export default authRoute(DatabaseBaseConnection(DeleteBlog))