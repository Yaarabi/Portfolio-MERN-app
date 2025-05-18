
import { check, validationResult } from 'express-validator';

const registerValidation = [
    check('username', 'Username is required and should be at least 3 characters long').isLength({ min: 3 }),
    check('email', 'Invalid email format').isEmail(),
    check('password', 'Password should be at least 8 characters long').isLength({ min: 8 })
];

const loginValidation = [
    check('email', 'Invalid email format').isEmail(),
    check('password', 'Password should be at least 8 characters long').isLength({ min: 8 })
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export { registerValidation, loginValidation, validate };
