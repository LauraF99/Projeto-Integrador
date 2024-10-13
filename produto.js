function teste(evt, testeName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(testeName).style.display = "block";
    evt.currentTarget.className += " active";
  }


let produtos = [
    { id: 1, nome: "Produto A", categoria: "Categoria 1", tamanho: "M", valor: 100 },
    { id: 2, nome: "Produto B", categoria: "Categoria 2", tamanho: "G", valor: 150 }
];
let idCounter = produtos.length ? produtos[produtos.length - 1].id + 1 : 1;

document.addEventListener('DOMContentLoaded', () => {
    const produtoForm = document.getElementById('produtoForm');
    const listaProdutos = document.getElementById('listaProdutos').querySelector('tbody');

    const renderProdutos = () => {
        listaProdutos.innerHTML = '';
        produtos.forEach(produto => {
            const row = document.createElement('tr');
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
            listaProdutos.appendChild(row);
        });
    };

    produtoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const categoria = document.getElementById('categoria').value;
        const tamanho = document.getElementById('tamanho').value;
        const valor = document.getElementById('valor').value;

        const novoProduto = {
            id: idCounter++,
            nome,
            categoria,
            tamanho,
            valor: parseFloat(valor)
        };

        produtos.push(novoProduto);
        renderProdutos();
        produtoForm.reset();
    });

    renderProdutos();
});

function editarProduto(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        document.getElementById('nome').value = produto.nome;
        document.getElementById('categoria').value = produto.categoria;
        document.getElementById('tamanho').value = produto.tamanho;
        document.getElementById('valor').value = produto.valor;

        produtos = produtos.filter(p => p.id !== id);
        renderProdutos();
    }
}

function excluirProduto(id) {
    produtos = produtos.filter(p => p.id !== id);
    renderProdutos();
}
