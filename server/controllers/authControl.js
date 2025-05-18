
import User from "../models/user.model.js";
import bcrypt from "bcryptjs" ;
import jwt from 'jsonwebtoken';
import dotenv from "dotenv" 


dotenv.config()

const register = async (req, res) =>{

    try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });

    await user.save();

    res.status(200).json({ message: 'Registration successful' });

    } catch (error) {

    res.status(500).json({ error: 'Registration failed' });

    }

}

const login = async (req, res) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({ error: 'Authentication failed try Again' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed try Again' });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET_KEY, {
        expiresIn: '1h',
    });

    res.status(200).json({ token, userId: user._id });
    } catch (error) {
    res.status(500).json({ error: 'Authentication failed try Again' });
    }
};

export { register, login }
