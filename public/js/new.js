const newFormHandler = async (event) => {
//
//

  const title = document.querySelector('#title').value;
//
  const content = document.querySelector('#body').value;
//
//
//
  console.log(title);
  console.log(content);
//
//
//
  await fetch(`/api/post`, {
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
