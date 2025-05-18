
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
// console.log("JWT Secret Key:", process.env.SECRET_KEY)

// const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization.split(" ")[1]; 

//     if (!token) {
//         return res.status(401).json({ error: "No token provided." });
//     }

//     try {
//         const verified = jwt.verify(token, process.env.SECRET_KEY); 
//         req.user = verified; 
//         next()
//     } catch (err) {
//         res.status(401).json({ error: "Invalid or expired token." });
//     }
// };


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided or invalid format." });
    }

    const token = authHeader.split(" ")[1];
    
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        console.error("Token verification error:", err);
        res.status(401).json({ error: "Invalid or expired token." });
    }
};

export { verifyToken }


