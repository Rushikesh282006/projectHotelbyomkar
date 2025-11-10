document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000';
    const registerForm = document.getElementById('register-form');

    if (registerForm) {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('register-phone').value;
            const password = document.getElementById('register-password').value;

            try {
                const response = await fetch(`${API_URL}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, phone, password })
                });

                const result = await response.json();
                alert(result.message);

                if (response.ok) {
                    // Successful registration! Redirect to the login page.
                    alert('Registration successful! Please log in.');
                    window.location.href = 'login.html';
                }
            } catch (error) {
                console.error('Registration failed:', error);
                alert('Could not connect to the server. Please try again later.');
            }
        });
    }
});