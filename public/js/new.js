const newFormHandler = async function (event) {
  event.preventDefault();
//
//

  const postTitle = document.querySelector('input[name="postTitle"]').value;
//
  const postCont = document.querySelector('textarea[name="postBody"]').value;
//
//
//
  console.log(postTitle);
  console.log(postCont);
//
//
//
  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      postTitle,
      postCont,
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
