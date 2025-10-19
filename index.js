const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function storePosts(posts) {
  let postsArray = [];

  for (let i = 0; i < posts.length; i++) {
     let post =  `<div class="container">
        <article>
          <div class="container__profile">
            <img src="${posts[i].avatar}" alt="" class="avatar" />
            <div class="container__profile__details">
              <h1>${posts[i].name}</h1>
              <h2>${posts[i].location}</h2>
            </div>
          </div>
           <div class="post__image">
            <img src="${posts[i].post}" alt="" class="post-img" />
          </div>
          <div class="actions">
            <img src="images/icon-heart.png" alt="" class="icon" />
            <img src="images/icon-comment.png" alt="" class="icon" />
            <img src="images/icon-dm.png" alt="" class="icon" />
          </div>
          <h2 class="likes">${posts[i].likes}K likes</h2>
          <p class="comments">
            <span>${posts[i].username}</span> ${posts[i].comment}
          </p>
        </article>
      </div>
`;
postsArray.push(post)
  }
  return postsArray;
}
console.log(storePosts(posts)[0])


function renderPost(){
document.querySelector("[data-js=main]").innerHTML = storePosts(posts)[2];
}

renderPost()
