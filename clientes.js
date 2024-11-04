// Lista de clientes pré-cadastrados
let clientes = [];
let clienteIdCounter = 1;

// Evento para carregar a página e inicializar funções
document.addEventListener('DOMContentLoaded', () => {
    const clienteForm = document.getElementById('clienteForm');
    const listaClientes = document.getElementById('listaClientes').querySelector('tbody');

    // Função para renderizar a lista de clientes na tabela
    const renderClientes = () => {
        listaClientes.innerHTML = ''; // Limpa a tabela
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.dataNascimento}</td>
                <td>${cliente.contato}</td>
                <td>${cliente.email}</td>
                <td>${cliente.endereco}</td>
                <td class="actions">
                    <button class="edit" onclick="editarCliente(${cliente.id})">Editar</button>
                    <button class="delete" onclick="excluirCliente(${cliente.id})">Excluir</button>
                </td>
            `;
            listaClientes.appendChild(row);
        });
    };

    // Evento de envio do formulário de novo cliente
    clienteForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const contato = document.getElementById('contato').value;
        const email = document.getElementById('email').value;
        const endereco = document.getElementById('endereco').value;

        const novoCliente = {
            id: clienteIdCounter++,
            nome,
            cpf,
            dataNascimento,
            contato,
            email,
            endereco
        };

        clientes.push(novoCliente);
        renderClientes();
        clienteForm.reset();
    });

    // Função para editar um cliente
    window.editarCliente = (id) => {
        const cliente = clientes.find(c => c.id === id);
        if (cliente) {
            document.getElementById('nome').value = cliente.nome;
            document.getElementById('cpf').value = cliente.cpf;
            document.getElementById('dataNascimento').value = cliente.dataNascimento;
            document.getElementById('contato').value = cliente.contato;
            document.getElementById('email').value = cliente.email;
            document.getElementById('endereco').value = cliente.endereco;

            clientes = clientes.filter(c => c.id !== id);
            renderClientes();
        }
    };

    // Função para excluir um cliente
    window.excluirCliente = (id) => {
        clientes = clientes.filter(c => c.id !== id);
        renderClientes();
    };

    renderClientes();
});
