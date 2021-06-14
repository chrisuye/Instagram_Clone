import Users from "../Models/users.js";
import mongoose from "mongoose";

export const signUpUser = async (req, res) => {
    const user = req.body

    const newUser = new Users(user)

    try {
        await newUser.save()

        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const signInuser = async (req, res) => {
    
}
