const db = require("../db");

async function test() {
    var result = await db.query(
        "SELECT * FROM pw_user;"
    );

    throw new Error("test");
}

module.exports = {
    test
}