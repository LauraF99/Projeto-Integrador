// Array de usuários
const usuarios = [
    { email: 'flavia@gmail.com', password: '12345' },
    { email: 'laura@gmail.com', password: '2024' },
    { email: 'rorras@gmail.com', password: '67890' },
    { email: 'admin@gmail.com', password: 'admin' }
];
// função login
document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar se o usuário existe
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.password === password);

    // Verificar se o login foi bem-sucedido
    const message = document.getElementById('message');
    message.textContent = '';


    if (usuario) {
        // Login bem-sucedido
        message.style.color = 'white';
        message.textContent = 'Login bem-sucedido! Redirecionando...';
        setTimeout(() => {
            window.location.href = 'home.html'; // Exemplo de redirecionamento
        }, 1000); // Redirecionamento em 1 segundo
    } else {
        // Login falhou
        message.style.color = 'red';
        message.textContent = 'E-mail ou senha incorretos!';
    }
});

