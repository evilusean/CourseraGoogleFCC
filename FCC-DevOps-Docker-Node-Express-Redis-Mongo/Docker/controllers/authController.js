const User = require("../models/userModel")
const bcrypt = require("bcryptjs")


exports.signUp = async (req, res) => {
    const {username, password} = req.body
    const hashpassword = await bcrypt.hash(password, 12)
    try  {
        const newUser = await User.create({
            username,
            password: hashpassword
    });
        res.status(201).json({
            status: "success",
            data: {
                user: newUser,
            },
        })
    } catch (e) {
        res.status(400).json({
            status: "fail",
        })
    }
}