const jwt = require('jsonwebtoken');

function authorize(role=null) {
    return (req, res, next) => {
        var authHeaders = req.headers['authorization'];
        var token = authHeaders && authHeaders.split(' ')[1];

        if (!token) {
            return res.status(403).json({message: "Chyba"});
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({message: "Neautorizováno"});
            }
            if (role && user.role !== role) {
                return res.status(403).json({message: "Nedostatečná oprávnění"});
            }
            req.user = user;
            next();
        });
    }
}

module.exports = {
    authorize
};