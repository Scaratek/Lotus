document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('auth-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const token = document.getElementById('auth-token').value;

        fetch('/admin?auth=' + token)
            .then(response => {
                if (response.ok) {
                    window.location.href = '/admin';
                } else {
                    document.getElementById('auth-message').textContent = 'Invalid token';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});