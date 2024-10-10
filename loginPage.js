function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Basic validation
    if (username === "admin" && password === "admin123") {
        message.style.color = "green";
        message.textContent = "Login successful!";

        // Redirect to home page (index.html) after 1 second
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to index.html
        }, 1000); // 1 second delay
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }

    return false; // Prevent form submission
}
