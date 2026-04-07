import User from "../model/User.js";
import jwt from 'jsonwebtoken';
export const loginUser = async (req, res) => {
    try {
        const { email, name, picture } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({
                name,
                email,
                image: picture,
            });
        }
        const token = jwt.sign({ user }, process.env.JWT_SEC, {
            expiresIn: "15d"
        });
        res.status(200).json({
            message: "Log In Success",
            token,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
