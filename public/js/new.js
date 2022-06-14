const newFormHandler = async (event) => {
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

if (title && content) {
  const response = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload();
  } else {
    alert(response.statusText);
  }
}
};
//
//
//
document
  .querySelector('#newPost')
  .addEventListener('submit', newFormHandler);
