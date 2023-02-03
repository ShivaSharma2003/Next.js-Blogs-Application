import DatabaseBaseConnection from "Utils/mongoDB";
import authRoute from "MiddleWare/AuthRoute";
import expressAsyncHandler from 'express-async-handler'
import BlogSchema from "Model/BlogModal";

const likeBlog = expressAsyncHandler(async (req, res) => {
    const { id } = req.query
    const requestMetod = req.method
    if (requestMetod === "PUT") {
        try {
            const blog = await BlogSchema.findById(id);
            if (blog) {
                if (blog.userId === req.user) {
                    if (!blog.likes.includes(req.user)) {
                        await blog.updateOne({ $push: { likes: req.user } })
                        res.status(200).json({Message : "Like Blog Successfully"})
                    } else {
                        await blog.updateOne({ $pull: { likes: req.user } })
                        res.status(200).json({Message : "Remove like Successfully"})
                    }
                } else {
                    res.status(403).json({ errorMessage: "Not Authorized" })
                }
            } else {
                res.status(404).json({ errorMessage: "Blog Not Found" })
            }
        } catch (error) {
            res.status(500).json({ errorMessage: "Internal Server Error" })
        }
    } else {
        res.status(400).json({ errorMessage: "Invalid request" })
    }
})

export default authRoute(DatabaseBaseConnection(likeBlog))