var posts = [
    {
        postId: 1,
        userId: 1,
        title: 'Krušné hory',
        content: 'Text text text'
    },
    {
        postId: 2,
        userId: 1,
        title: 'Vysoké Tatry',
        content: 'Text text text text'
    }
];

var nextPostId = 3;

function getAll() {
    return posts;
}

function get(id) {
    var post = posts.find(po => po.postId === id);
    return post;
}

function create(model, userId) {
    var newPost = {
        postId: nextPostId,
        userId: userId,
        title: model.title,
        content: model.content
    };
    posts.push(newPost);
    nextPostId++;
    return posts.find(po => po.postId == newPost.postId);
}


module.exports = {
    getAll, get, create
}