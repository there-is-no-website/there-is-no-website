const correctPassword = "perplexing";
const maxAttempts = 3;
let attempts = 0;

const form = document.getElementById('passwordFormOne');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('passwordInput').value;

    if (passwordInput === correctPassword) {
        window.location.href = "the-void.html";
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            window.location.href = "index.html";
        } else {
            alert(`Incorrect password. You have ${maxAttempts - attempts} attempt(s) remaining.`);
        }
    }
});
