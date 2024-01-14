//Complete this JS file to render the post1 on the screen with all the specified tags.
let post1 ={
  id: 1, 
  author: 'John',
  content: 'My first Post!', 
  likes: 10, 
  comments: ['Great post!', 'Nice photo!'], 
  image: 'https://files.codingninjas.in/image2-28694.jpg' };

const postsEl = document.getElementById('posts');

const postEl = document.createElement('div');
postEl.classList.add('post');
postsEl.appendChild(postEl);

const authorEl = document.createElement('h3');
authorEl.classList.add('author');
authorEl.textContent = post1.author;

const imageEl = document.createElement('img');
imageEl.classList.add('image');
imageEl.setAttribute('src', post1.image);

const contentEl = document.createElement('p');
contentEl.classList.add('content');
contentEl.textContent = post1.content;

const likeBtnEl = document.createElement('button');
likeBtnEl.classList.add('likeBtn');
likeBtnEl.textContent = "Like";

let likeAuth = true;
likeBtnEl.addEventListener('click', function() {
  if (likeAuth === true) {
    post1.likes++;
    postFooterEl.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
    likeAuth = false;
  } else {
      post1.likes--;
      postFooterEl.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
      likeAuth = true;
  }
    })

const inputTextEl = document.createElement('input');
inputTextEl.classList.add('inputText');

const commentBtnEl = document.createElement('button');
commentBtnEl.classList.add('commentBtn');
commentBtnEl.textContent = "Comment";

commentBtnEl.addEventListener('click', function() {
        post1.comments.push(inputTextEl.value);
        postFooterEl.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
        const tempComment = document.createElement('p');
        tempComment.textContent = inputTextEl.value;
        commentsConEl.appendChild(tempComment);
    })


const postFooterEl = document.createElement('div');
postFooterEl.classList.add('post-footer');
postFooterEl.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

const commentsConEl = document.createElement('div');
commentsConEl.classList.add('comments-container');
commentsConEl.style.display = 'none';

postEl.append(authorEl, imageEl, contentEl, likeBtnEl, inputTextEl, commentBtnEl, postFooterEl, commentsConEl);

for (let i = 0; i < post1.comments.length; i++){
  const tempComment = document.createElement('p');
  tempComment.textContent = post1.comments[i];
  commentsConEl.appendChild(tempComment);
};

postFooterEl.addEventListener('click', function () {
  if (commentsConEl.style.display === 'none') {
      commentsConEl.style.display = 'block';
  } else {
      commentsConEl.style.display = 'none';
  }
  
})
