const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from login form
  //
  const email = document.querySelector('#UsernameLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();
  //
  //
  if (email && password) {
    // Send POST request to API endpoint
    //
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect browser to profile page
      //
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);
