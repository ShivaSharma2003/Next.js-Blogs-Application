import mongoose from 'mongoose'

const BlogSchema = mongoose.Schema({
    title:
    {
        type: String,
        required: true,
    },
    description:
    {
        type: String,
        required: string,
    },
    image:
    {
        type: [String],
        required: true,
    },
    userId:
    {
        type: [mongoose.Types.ObjectId],
        required: true,
    },
    comments:
    {
        type: [mongoose.Types.ObjectId],
    },
    likes:
    {
        type: [mongoose.Types.ObjectId],
    },
    dislikes:
    {
        type: [mongoose.Types.ObjectId],
    }
},
    {
        timestamps: true
    })

const Blog = mongoose.model('Blog', BlogSchema)
export default Blog;