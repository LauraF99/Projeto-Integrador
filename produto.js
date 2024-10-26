// Lista de produtos pré-cadastrados
let produtos = [
    { id: 1, nome: "Astronauta", categoria: "Profissões", tamanho: "M", valor: 100 },
    { id: 2, nome: "Homem-Aranha", categoria: "Super-Heróis", tamanho: "G", valor: 150 }
];

// Inicializa o contador de ID com base no último produto cadastrado ou 1 se a lista estiver vazia
let idCounter = produtos.length ? produtos[produtos.length - 1].id + 1 : 1;

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário e o corpo da tabela de produtos
    const produtoForm = document.getElementById('produtoForm');
    const listaProdutos = document.getElementById('listaProdutos').querySelector('tbody');

    // Função para renderizar a lista de produtos na tabela
    const renderProdutos = () => {
        // Limpa o conteúdo atual da tabela
        listaProdutos.innerHTML = '';
        
        // Itera sobre a lista de produtos e cria uma nova linha para cada produto
        produtos.forEach(produto => {
            const row = document.createElement('tr'); // Cria uma nova linha da tabela
            
            // Adiciona as células com os dados do produto
            row.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.tamanho}</td>
                <td>${produto.valor}</td>
                <td class="actions">
                    <button class="edit" onclick="editarProduto(${produto.id})">Editar</button>
                    <button class="delete" onclick="excluirProduto(${produto.id})">Excluir</button>
                </td>
            `;
            // Adiciona a nova linha à tabela
            listaProdutos.appendChild(row);
        });
    };

    // Manipulador do evento de envio do formulário de cadastro de produto
    produtoForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário
        
        // Captura os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const categoria = document.getElementById('categoria').value;
        const tamanho = document.getElementById('tamanho').value;
        const valor = document.getElementById('valor').value;

        // Cria um novo objeto de produto com os dados do formulário e um ID incremental
        const novoProduto = {
            id: idCounter++,
            nome,
            categoria,
            tamanho,
            valor: parseFloat(valor) // Converte o valor para um número
        };

        // Adiciona o novo produto à lista de produtos
        produtos.push(novoProduto);
        
        // Atualiza a tabela de produtos
        renderProdutos();
        
        // Reseta o formulário para limpar os campos
        produtoForm.reset();
    });

    // Função para editar um produto existente
    window.editarProduto = (id) => {
        // Encontra o produto pelo ID
        const produto = produtos.find(p => p.id === id);
        
        // Se o produto for encontrado, preenche os campos do formulário com os dados do produto
        if (produto) {
            document.getElementById('nome').value = produto.nome;
            document.getElementById('categoria').value = produto.categoria;
            document.getElementById('tamanho').value = produto.tamanho;
            document.getElementById('valor').value = produto.valor;

            // Remove o produto da lista para permitir a edição
            produtos = produtos.filter(p => p.id !== id);
            
            // Atualiza a tabela de produtos
            renderProdutos();
        }
    };

    // Função para excluir um produto
    window.excluirProduto = (id) => {
        // Filtra a lista de produtos para remover o produto com o ID correspondente
        produtos = produtos.filter(p => p.id !== id);
        
        // Atualiza a tabela de produtos
        renderProdutos();
    };

    // Chama a função para renderizar os produtos ao carregar a página
    renderProdutos();
});
