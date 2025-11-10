document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://localhost:3000';
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            try {
                const response = await fetch(`${API_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                const result = await response.json();
                alert(result.message);
                
                if (response.ok) {
                    // Successful login! Redirect to the homepage.
                    alert('Login successful! Welcome, ' + result.username);
                    window.location.href = 'index.html'; // Or any other page
                }
            } catch (error) {
                console.error('Login failed:', error);
                alert('Could not connect to the server. Please try again later.');
            }
        });
    }
});