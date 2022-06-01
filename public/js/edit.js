const postId = document.querySelector('input[name="postId"]').value;
const editFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="postTitle"]').value;
  const postCont = document.querySelector('textarea[name="postBody"]').value;

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postCont,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('update post failed');
  }
  document.location.replace('/dashboard');
};

const deleteClickHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#editPostForm')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#deleteBtn')
  .addEventListener('click', deleteClickHandler);