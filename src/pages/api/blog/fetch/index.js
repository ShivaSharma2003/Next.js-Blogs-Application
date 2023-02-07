import expressAsyncHandler from 'express-async-handler'
import BlogSchema from 'Model/BlogModal'
import UserSchema from 'Model/UserModal'

const GetBlogs = expressAsyncHandler(async (req, res) => {
    try {
        const blogs = await BlogSchema.find()
        const userBlog = blogs?.map(async (blog) => {
            const user = await UserSchema.findById(blog.userId).select("userName , Avatar , email")
            const userBlog = blogs.concat({ user })
            return userBlog;
        })
        Promise.all(userBlog).then((response) => {
            res.status(200).json(response)
        })
    } catch (error) {
        res.status(500).json({ errorMessage: "Internal Server Error" })
    }
})

export default GetBlogs