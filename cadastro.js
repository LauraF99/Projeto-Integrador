// Array de usuários
const usuarios = [
    { email: 'flavia@gmail.com', password: '12345' },
    { email: 'laura@gmail.com', password: '2024' },
    { email: 'rorras@gmail.com', password: '67890' },
    { email: 'admin@gmail.com', password: 'admin' }
];

document.getElementById('cadastro').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = document.getElementById('emailCadastro').value;
    const password = document.getElementById('senhaCadastro').value;

    const message = document.getElementById('registerMessage');
    message.textContent = '';

    // Verificar se o e-mail existe
    const usuarioExiste = usuarios.some(usuario => usuario.email === email);

    if (usuarioExiste) {
        // Caso o e-mail já exista, exibir uma mensagem de erro
        message.style.color = 'red';
        message.textContent = 'Este e-mail já está cadastrado!';
    } else {
        // Adicionar o novo usuário à lista de usuários
        usuarios.push({ email: email, password: password });
        setTimeout(() => {
            window.location.href = 'login.html'; // Exemplo de redirecionamento
        }, 1000); // Redirecionamento em 1 segundo

        // Exibir uma mensagem de sucesso
        message.style.color = 'white';
        message.textContent = 'Cadastro realizado com sucesso!';

        // Limpar os campos do formulário
        document.getElementById('emailCadastro').value = '';
        document.getElementById('senhaCadastro').value = '';
    }

    console.log('Usuários:', usuarios);
});
