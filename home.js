// Últimos Produtos Vendidos
const ctx1 = document.getElementById('produtosVendidosChart').getContext('2d');
const produtosVendidosChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Astronauta', 'Mario Bros', 'Princesa Bela', 'Coelho', 'Ursinho'],
        datasets: [{
            label: 'Quantidade Vendida',
            data: [15, 30, 10, 50, 25],
            backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#8e44ad'],
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Relatório de Vendas
const ctx2 = document.getElementById('vendasChart').getContext('2d');
const vendasChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Vendas Totais',
            data: [5000, 8000, 7500, 10000, 12000, 15000],
            borderColor: '#1abc9c',
            backgroundColor: 'rgba(26, 188, 156, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Novos Clientes
const ctx3 = document.getElementById('clientesChart').getContext('2d');
const clientesChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Clientes',
            data: [5, 8, 12, 7, 4, 10],
            backgroundColor: ['#f39c12', '#e74c3c', '#2ecc71', '#3498db', '#8e44ad', '#1abc9c'],
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    }
});
