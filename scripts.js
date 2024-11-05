function atualizarHorario() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("pt-BR");
    const formattedTime = now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
    
    document.querySelectorAll('.last-updated').forEach(el => {
        el.textContent = ${formattedDate} ${formattedTime};
    });
}

function atualizarDados() {
    // Simulação de dados para a atualização
    const activeCount = Math.floor(Math.random() * 30); // Número aleatório entre 0 e 30
    const unresponsiveCount = Math.floor(Math.random() * 10); // Número aleatório entre 0 e 10
    const stoppedCount = Math.floor(Math.random() * 5); // Número aleatório entre 0 e 5

    // Atualiza contagem
    document.getElementById('active-count').textContent = ${activeCount} ✔;
    document.getElementById('unresponsive-count').textContent = unresponsiveCount;
    document.getElementById('stopped-count').textContent = stoppedCount;

    // Exemplo de robôs (pode ser modificado conforme necessário)
    const activeRobots = ['Robô 1', 'Robô 2', 'Robô 3', 'Robô 4', 'Robô 5'];
    const unresponsiveRobots = ['Robô 6', 'Robô 7', 'Robô 8'];
    const stoppedRobots = ['Robô 9', 'Robô 10'];

    // Atualiza listas de robôs
    document.getElementById('active-robots').innerHTML = activeRobots.map(robot => <li class="list-group-item">${robot}</li>).join('');
    document.getElementById('unresponsive-robots').innerHTML = unresponsiveRobots.map(robot => <li class="list-group-item">${robot}</li>).join('');
    document.getElementById('stopped-robots').innerHTML = stoppedRobots.map(robot => <li class="list-group-item">${robot}</li>).join('');
}

// Atualiza dados a cada 60 segundos
setInterval(() => {
    atualizarHorario();
    atualizarDados();
}, 60000);

// Atualiza uma vez ao carregar a página
atualizarHorario();
atualizarDados();