import expressAsyncHandler from 'express-async-handler'
import BlogSchema from 'Model/BlogModal'

const GetBlogs = expressAsyncHandler(async (req, res) => {
    try {
        const blogs = await BlogSchema.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ errorMessage: "Internal Server Error" })
    }
})

export default GetBlogs