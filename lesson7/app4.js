const postlar = [
  { author: "Alice", likes: 100, comments: 20, shares: 5 },
  { author: "Bob", likes: 200, comments: 50, shares: 10 },
];

let engKopLike = 0;
let engMashhurPost = "";
let jamiFaollik = 0;

for (i in postlar) {
  let post = postlar[i];

  let engagement = post.likes + post.comments + post.shares;

  jamiFaollik += engagement;

  if (post.likes > engKopLike) {
    engKopLike = post.likes;
    engMashhurPost = post.author;
  }
}

console.log("Eng kop like olgan post:", engMashhurPost);
console.log("Jami engagement:", jamiFaollik);
