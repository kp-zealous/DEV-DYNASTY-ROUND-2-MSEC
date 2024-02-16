function submitForm() {
    // Get values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check for a simple example of username and password
    if (username === "user" && password === "password") {
        // Redirect to a dashboard page or perform other actions
        window.location.href = "dashboard.html";
    } else {
        // Display error message
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
}
