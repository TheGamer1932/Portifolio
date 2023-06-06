document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Salvar os dados de registro no localStorage
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);

    showMessage("success", "Registro bem-sucedido! Redirecionando para a tela de login...");
    setTimeout(function() {
        // Redirecionar para a tela de login após 2 segundos
        window.location.href = "login.html";
    }, 2000);
});

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