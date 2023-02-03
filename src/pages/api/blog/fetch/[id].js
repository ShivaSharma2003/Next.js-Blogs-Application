import expressAsyncHandler from 'express-async-handler'
import BlogsSchema from 'Model/BlogModal'
import DatabaseBaseConnection from 'Utils/mongoDB'

const GetBlog = expressAsyncHandler(async (req, res) => {
    const { id } = req.query;

    try {
        const blog = await BlogsSchema.findOne({ _id: id });
        if (blog) {
            res.status(200).json(blog)
        } else {
            res.status(404).json({ error: 'Blog Not Found' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ errorMessage: "Internal Server Error", error: error.message })
    }
})

export default DatabaseBaseConnection(GetBlog)