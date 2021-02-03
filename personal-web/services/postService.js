const db = require("../db");

async function getList() {
    var result = await db.query(
        "SELECT id, title, preview FROM post;"
    );

    return result.rows;
}

async function get(id) {
    var result = await db.query(
        "SELECT * FROM post WHERE id=$1;",
        [id]
    );

    return result.rows[0];
}

async function create(model) {
    var result = await db.query(
        "INSERT INTO post (title, content, preview) VALUES ($1, $2, $3) RETURNING id, title;",
        [model.title, model.content, model.preview]
    );

    return result.rows[0];
}


module.exports = {
    getList, get, create
}