import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// generate token
const generateToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECERT , {
        expiresIn: "7D",
    });
 };


// register user 

export const registerUser = async (req , res) =>{
    const {name , email , password , role} = req.body;

    try {
        const userExists = await User.findOne({email});

        if(userExists) {
            return res.status(400).json({message: "User already Exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        if(user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            })
        }

    } catch (error) {
        res.status(500).josn({message : error.message});
    }
}

export const loginUser = async (req , res) =>{
    const {email , password} = req.body;

    try {

    const user = await User.findOne({email});

    if(email && (bcrypt.compare(password , user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
     } else{
        res.status(401).json({message: "Invalid Credentials"})
     }
    } catch (error) {
        res.status(500).json({message: error.message });
    }

}

