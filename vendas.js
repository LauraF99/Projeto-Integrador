// Lista de pedidos pré-cadastrados
let pedidos = [];
let idCounter = 1;

// Evento para carregar a página e inicializar funções
document.addEventListener('DOMContentLoaded', () => {
    const pedidoForm = document.getElementById('pedidoForm');
    const listaPedidos = document.getElementById('listaPedidos').querySelector('tbody');

    // Função para renderizar a lista de pedidos na tabela
    const renderPedidos = () => {
        listaPedidos.innerHTML = ''; // Limpa a tabela
        pedidos.forEach(pedido => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pedido.id}</td>
                <td>${pedido.nomeCliente}</td>
                <td>${pedido.idProduto}</td>
                <td>${pedido.quantidade}</td>
                <td>${pedido.valorTotal.toFixed(2)}</td>
                <td>${pedido.pagamento}</td>
                <td>
                    <select onchange="alterarStatus(${pedido.id}, this.value)">
                        <option value="Em Preparo" ${pedido.status === 'Em Preparo' ? 'selected' : ''}>Em Preparo</option>
                        <option value="Enviado" ${pedido.status === 'Enviado' ? 'selected' : ''}>Enviado</option>
                        <option value="Entregue" ${pedido.status === 'Entregue' ? 'selected' : ''}>Entregue</option>
                        <option value="Cancelado" ${pedido.status === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                    </select>
                </td>
                <td class="actions">
                    <button class="edit" onclick="editarPedido(${pedido.id})">Editar</button>
                    <button class="delete" onclick="excluirPedido(${pedido.id})">Excluir</button>
                </td>
            `;
            listaPedidos.appendChild(row);
        });
    };

    // Evento de envio do formulário de novo pedido
    pedidoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nomeCliente = document.getElementById('nomeCliente').value;
        const idProduto = parseInt(document.getElementById('idProduto').value);
        const quantidade = parseInt(document.getElementById('quantidade').value);
        const pagamento = document.getElementById('pagamento').value;
        const valorUnitario = 50.00; // Por exemplo, cada produto tem um valor fixo de 50
        const valorTotal = quantidade * valorUnitario;

        const novoPedido = {
            id: idCounter++,
            nomeCliente,
            idProduto,
            quantidade,
            valorTotal,
            pagamento,
            status: 'Em Preparo'
        };

        pedidos.push(novoPedido);
        renderPedidos();
        pedidoForm.reset();
    });

    // Função para editar um pedido
    window.editarPedido = (id) => {
        const pedido = pedidos.find(p => p.id === id);
        if (pedido) {
            document.getElementById('nomeCliente').value = pedido.nomeCliente;
            document.getElementById('idProduto').value = pedido.idProduto;
            document.getElementById('quantidade').value = pedido.quantidade;
            document.getElementById('pagamento').value = pedido.pagamento;

            pedidos = pedidos.filter(p => p.id !== id);
            renderPedidos();
        }
    };

    // Função para excluir um pedido
    window.excluirPedido = (id) => {
        pedidos = pedidos.filter(p => p.id !== id);
        renderPedidos();
    };

    // Função para alterar o status de um pedido
    window.alterarStatus = (id, novoStatus) => {
        const pedido = pedidos.find(p => p.id === id);
        if (pedido) {
            pedido.status = novoStatus;
        }
    };

    renderPedidos();
});
