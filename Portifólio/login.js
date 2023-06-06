document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Recuperar os dados de registro do localStorage
    var registeredUsername = localStorage.getItem("registeredUsername");
    var registeredPassword = localStorage.getItem("registeredPassword");

    if (username === registeredUsername && password === registeredPassword) {
        showMessage("success", "Login bem-sucedido! Redirecionando...");
        setTimeout(function() {
            // Redirecionar para a página principal após 2 segundos
            window.location.href = "index.html";
        }, 2000);
    } else {
        showMessage("error", "Usuário ou senha inválidos!");
    }
});

function loginAsGuest() {
    showMessage("success", "Login como Convidado bem-sucedido! Redirecionando...");
    setTimeout(function() {
        // Redirecionar para a página principal após 2 segundos
        window.location.href = "indexconv.html";
    }, 2000);
}

function showMessage(type, message) {
    var messageContainer = document.createElement("div");
    messageContainer.className = type;
    messageContainer.textContent = message;
    var container = document.querySelector(".container");
    container.appendChild(messageContainer);
    setTimeout(function() {
        container.removeChild(messageContainer);
    }, 3000);
}
