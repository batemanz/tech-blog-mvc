const signupFormHandler = async function (event) {
  event.preventDefault();
//
//
//
  const username = document
    .querySelector('#usernameSignup')
    .value.trim();
  const password = document
    .querySelector('#passwordSignup')
    .value.trim();
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
//
//
//
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};
//
//
//
document
  .querySelector('.signupForm')
  .addEventListener('submit', signupFormHandler);
