const jwt = require('jsonwebtoken');
const { roles } = require('../helpers/enums');
const { LogicError } = require('../helpers/logicError');
const db = require("../db");
const bcrypt = require("bcrypt");

async function init() {
    var pass = "test";
    var hash_pass = bcrypt.hashSync(pass, 10);

    try {
        await db.query(
            "INSERT INTO pw_user(email, password) VALUES ($1, $2);",
            ["adam", hash_pass]
        );
    }
    catch (err) {
        console.log(err.message);
    }
}

async function authenticate(model) {
    var result = await db.query(
        "SELECT * FROM pw_user WHERE email=$1",
        [model.email]
    );
    var user = result.rows[0];

    if (!user) {
        throw new LogicError("Špatný email nebo heslo");
    }

    if (bcrypt.compareSync(model.password, user.password)) {
        // shoda hesel
        var jwtData = {userId: user.user_id}
        var token = jwt.sign(jwtData, process.env.ACCESS_TOKEN_SECRET);
        return {
            userId: user.user_id,
            email: user.email,
            accessToken: token
        };
    } else {
        // neshoda hesel
        throw new LogicError("Špatný email nebo heslo");
    }
};

module.exports = {
    authenticate, init
}