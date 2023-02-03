import DatabaseBaseConnection from "Utils/mongoDB";
import expressAsyncHandler from 'express-async-handler'
import BlogSchema from "Model/BlogModal";
import authRoute from "MiddleWare/AuthRoute";

const dislikeBlog = expressAsyncHandler(async (req, res) => {
    const { id } = req.query
    const requestMethod = req.method
    if (requestMethod === "PUT") {
        try {
            const blog = await BlogSchema.findById(id);
            if (blog) {
                if (blog.userId === req.user) {
                    if (!blog.dislikes.includes(req.user)) {
                        await blog.updateOne({ $push: { dislikes: req.user } })
                        res.status(200).json({ Message: "Dislike Blog Successfully" })
                    } else {
                        await blog.updateOne({ $pull: { dislikes: req.user } })
                        res.status(200).json({ Message: "Remove Dislike Successfully" })
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
        res.status(400).json("Invalid Request")
    }
})

export default authRoute(DatabaseBaseConnection(dislikeBlog))