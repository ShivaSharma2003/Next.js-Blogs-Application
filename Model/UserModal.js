import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = mongoose.Schema({
    userName:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    Avatar:
    {
        type: String,
    },
    isBlogger:
    {
        type: Boolean,
        required: true,
        default: false,
    },
    blogs:
    {
        type: [mongoose.Types.objectId],
    },
    followers:
    {
        type: [mongoose.Types.objectId],
    },
    following:
    {
        type: [mongoose.Types.objectId],
    }
},
    {
        timestamps: true
    })

UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hashSync(this.password, salt);
    next()
})

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

mongoose.models = {}
const User = mongoose.model('User', UserSchema)

export default User
