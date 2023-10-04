// controllers/authController.js
import jwt from 'jsonwebtoken';
import config from '../utils/config';
import { Request, Response, NextFunction } from 'express'; // Assuming you're using Express

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Access denied');
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded: any = jwt.verify(token, config.jwt_secret_key, { algorithms: ['HS256'] });
        req.body.user = decoded.userId;
        req.body.userType = decoded.userType;
        next();
    } catch (err) {
        console.error('Error verifying token:', err);
        return res.status(403).send('Invalid token');
    }
};

export const checkPermissions = (allowedUserTypes: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (allowedUserTypes.includes(req.body.userType)) {
            next();
        } else {
            res.status(403).send('Permission denied');
        }
    };
};
