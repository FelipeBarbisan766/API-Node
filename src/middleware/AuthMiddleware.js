import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function verifyToken(req, res, next) { 
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    try {
        if (!token) return res.status(401).json({ message: 'Token não fornecido' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; 
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }
};

// export default validarToken = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) 
//         return res.status(401).json({ message: 'Token não fornecido' });

//     const token = authHeader.split(' ')[1];

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.userId = decoded.userId;
//         next();
//     } catch (err) {
//         return res.status(401).json({ message: 'Token inválido ou expirado' });
//     }
// };
