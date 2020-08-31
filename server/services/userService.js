var users = [
    {
        userId: 1,
        email: 'hroudadam@gmail.com',
        password: 'test'
    }
];

function authenticate(authenticateRequest) {
    var user = users.find(us => us.email == authenticateRequest.email);

    if (user.password == authenticateRequest.password) {
        return true;
    }

    return false;
};

export default {
    authenticate
};