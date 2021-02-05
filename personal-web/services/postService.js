const db = require("../db");

async function getList() {
    var result = await db.query(
        "SELECT post_id, title, preview FROM post;"
    );
    var rows = result.rows;
    for (let row of rows) {
        row.postId = row.post_id;
        delete row.post_id;
    };

    return rows;
}

async function get(postId) {
    var result = await db.query(
        "SELECT * FROM post WHERE post_id=$1;",
        [postId]
    );

    return result.rows[0];
}

async function create(newPost, userId) {
    var result = await db.query(
        "INSERT INTO post (title, content, preview, user_id) VALUES ($1, $2, $3, $4) RETURNING post_id, title, user_id;",
        [newPost.title, newPost.content, newPost.preview, userId]
    );

    return result.rows[0];
}


module.exports = {
    getList, get, create
}