const newFormHandler = async function (event) {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postCont = document.querySelector('textarea[name="post-body"]').value;

  console.log(postTitle);
  console.log(postCont);

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      postTitle,
      postCont,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
