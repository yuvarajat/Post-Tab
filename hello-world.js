//Create the event Listener for the buttons.
let post1 = {
  id: 1,
  author: 'John',
  content: 'My first Post!',
  likes: 10,
  comments: ['Great post!', 'Nice photo!'],
  image: 'https://files.codingninjas.in/image2-28694.jpg',
};
const likedPosts = new Set();

function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const authorElement = document.createElement('h3');
  authorElement.textContent = post1.author;

  const contentElement = document.createElement('p');
  contentElement.textContent = post1.content;

  const imageElement = document.createElement('img');
  imageElement.src = post1.image;
  imageElement.alt = 'Post Image';

  const likeButton = document.createElement('button');
  likeButton.textContent = `Like`;
  likeButton.classList.add('like-button');
  //Add eventListerner here to update the likes.

  likeButton.addEventListener('click', function () {
      if (!likedPosts.has(post1.id)) {
	      likePost();
          likedPosts.add(post1.id); //we add the curr post if not alrady present
      } else {
          unlikePost();
          likedPosts.delete(post1.id);
      }
      
  });

  const commentInput = document.createElement('input');
  commentInput.type = 'text';
  commentInput.placeholder = 'Write a comment...';

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';
  commentButton.classList.add('comment-button');
  //Create eventListener here for the comment button
  commentButton.addEventListener('click', function () {
    post1.comments.push(commentInput.value);
    postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
    const commentElement = document.createElement('p');
    commentElement.textContent = commentInput.value;
    commentsContainer.appendChild(commentElement);
  });

  const postFooter = document.createElement('div');
  postFooter.classList.add('post-footer');
  postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');
  commentsContainer.style.display = 'none';

  post1.comments.forEach((comment) => {
    const commentElement = document.createElement('p');
    commentElement.textContent = comment;
    commentsContainer.appendChild(commentElement);
  });

  postElement.appendChild(authorElement);

  postElement.appendChild(imageElement);
  postElement.appendChild(contentElement);
  postElement.appendChild(likeButton);
  postElement.appendChild(commentInput);
  postElement.appendChild(commentButton);
  postElement.appendChild(postFooter);
  postElement.appendChild(commentsContainer);

  postFooter.addEventListener('click', () => {
    if (commentsContainer.style.display === 'none') {
      commentsContainer.style.display = 'block';
    } else {
      commentsContainer.style.display = 'none';
    }
  });

  postsContainer.appendChild(postElement);
}

function likePost(){
    post1.likes++;
    renderPosts(); //posts should be re-rendered with updated likes.
    const button = document.querySelector('.like-button');
    button.style.backgroundColor = 'red'; //changing the color on liking as per the objective.
}

function unlikePost(){
    post1.likes--;
    renderPosts();
    
    const button = document.querySelector('.like-button');
    button.style.backgroundColor = '';
}

renderPosts();
