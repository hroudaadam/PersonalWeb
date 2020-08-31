var posts = [
    {
        postId: 1,
        userId: 1,
        title: 'Krušné hory',
        publishDate: '01-01-2020',
        lastEditDate: '02-01-2020',
        content: 'Text text text'
        // comments
    },
    {
        postId: 2,
        userId: 1,
        title: 'Vysoké tatry',
        publishDate: '01-01-2020',
        lastEditDate: '02-01-2020',
        content: 'Text text text text'
        // comments
    }
];

function getAll() {
    return posts;
}

function get(id) {
    var post = posts.find(po => po.postId === id);
    return post;
}


module.exports = {
    getAll, get
}