const jwt = require('jsonwebtoken');

function authorize(role) {
    return (req, res, next) => {
        var authHeaders = req.headers['authorization'];
        var token = authHeaders && authHeaders.split(' ')[1];

        if (!token) {
            return res.sendStatus(403);
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(401);
            }
            if (role && user.role !== role) {
                return res.sendStatus(401);
            }
            req.user = user;
            next();
        });
    }

}


module.exports = {
    authorize
};