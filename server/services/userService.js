const jwt = require('jsonwebtoken');
const { roles } = require('../helpers/enums');
const { LogicError } = require('../helpers/logicError');

var users = [
    {
        userId: 1,
        email: 'adam',
        password: 'test',
        role: roles.Admin
    },
    {
        userId: 2,
        email: 'julina',
        password: 'test',
        role: roles.User
    },
];

function authenticate(authenticateRequest) {
    var user = users.find(us => us.email === authenticateRequest.email);
    if (!user) {
        throw new LogicError("Špatný email nebo heslo");
    }

    if (user.password == authenticateRequest.password) {
        var token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        return {
            userRole: user.role,
            accessToken: token
        };
    }

    throw new LogicError("Špatný email nebo heslo");
};

module.exports = {
    authenticate
}