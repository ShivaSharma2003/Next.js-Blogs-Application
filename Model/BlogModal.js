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
        required: true,
    },
    content:
    {
        type: String,
        required: true
    },
    image:
    {
        type: [String],
        required: true,
    },
    userId:
    {
        type: String,
        required: true,
        immutable : true,
    },
    comments:
    {
        type: [],
    },
    likes:
    {
        type: [],
    },
    dislikes:
    {
        type: [],
    }
},
    {
        timestamps: true
    })

mongoose.models = {}
const Blog = mongoose.model('Blog', BlogSchema)
export default Blog;