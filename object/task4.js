const posts = [
    {
        author: "Alice",
        likes: 100,
        comments: [
            { user: "John", message: "Great post!" },
            { user: "Emma", message: "Loved it!" }
        ],
        shares: 5
    },
    {
        author: "Bob",
        likes: 200,
        comments: [
            { user: "Mike", message: "Nice!" },
            { user: "Sara", message: "Very helpful!" },
            { user: "Tom", message: "Amazing content!" }
        ],
        shares: 10,
    }
];


function mostLiked() {
    let post = posts[0];
    for(let i of posts) {
        if(post.likes<i.likes) post = i;
    }
    return post
}

function total(authorPost= ""){
    let total = 0;
    if(authorPost!=="") {
        let response = posts.find(author=>author.author.toLowerCase()===authorPost.toLowerCase());
        if(response!==undefined) {
            total = response.shares+response.likes+response.comments.length;
            return  total;
        }
        return "Can't find a author"
    }
    for(let i of posts){
        total += i.likes+i.shares+i.comments.length;
    }
    return total;
}

console.log(mostLiked());

console.log(total())
console.log(total("alice"))