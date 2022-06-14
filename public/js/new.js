const newFormHandler = async function (event) {
  event.preventDefault();
//
//

  const title = document.querySelector('input[name="title"]').value;
//
  const content = document.querySelector('textarea[name="content"]').value;
//
//
//
  console.log(title);
  console.log(content);
//
//
//
  await fetch(`/api/postRoutes`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
};
//
//
//
document
  .querySelector('#newPost')
  .addEventListener('submit', newFormHandler);
