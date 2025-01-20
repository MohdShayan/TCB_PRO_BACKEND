import { verifyToken } from "../service/auth.js";

function checkForAuthentication(req, res, next) {
    const token = req.cookies?.Atoken;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    const user = verifyToken(token);
    if (user) {
        req.user = user;
        return next();
    } else {
        return res.status(401).send('Unauthorized');
    }
}

export default checkForAuthentication;