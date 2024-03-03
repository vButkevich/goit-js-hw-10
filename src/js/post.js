'use strict';
{
  const fetchPostsBtn = document.querySelector('.btn');
  const postList = document.querySelector('.posts');

  fetchPostsBtn.addEventListener('click', async () => {
    try {
      const posts = await fetchPosts();
      renderPosts(posts);
    } catch (error) {
      console.log(error);
    }
  });

  async function fetchPosts() {
    // Change the number of items in the group here
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    return response.data;
  }

  function renderPosts(posts) {
    const markup = posts
      .map(({ id, title, body, userId }) => {
        return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
      })
      .join('');
    postList.innerHTML = markup;
  }
}
