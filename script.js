//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function () {
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const rememberCheckbox = document.getElementById('checkbox');
      const submitButton = document.getElementById('submit');
      const existingButton = document.getElementById('existing');

      submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberCheckbox.checked) {
          localStorage.setItem('savedUsername', username);
          localStorage.setItem('savedPassword', password);
        } else {
          localStorage.removeItem('savedUsername');
          localStorage.removeItem('savedPassword');
        }

        alert('Logged in as ' + username);
      });

      existingButton.addEventListener('click', function () {
        const savedUsername = localStorage.getItem('savedUsername');

        if (savedUsername) {
          alert('Logged in as ' + savedUsername);
        } else {
          alert('No existing user details found.');
        }
      });

      // Check if there are saved details
      const savedUsername = localStorage.getItem('savedUsername');
      if (savedUsername) {
        existingButton.style.display = 'block';
      }
    });