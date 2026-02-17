import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {type: String , required: true},
        email: {type:String , required: true},
        password: {type: String , required: true},

        role: {
             type: String,
             enum: ["student" , "professor", "admin"],
             default: "student",
        },
    },
    {
        timestamps: true,
    },
)

export default mongoose.model("User" , userSchema);