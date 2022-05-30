const postId = document.querySelector('input[name="post-id"]').value;

const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentCont = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;

  if (commentCont) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentCont,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
