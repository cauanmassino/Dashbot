function atualizarHorario() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("pt-BR");
    const formattedTime = now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

    document.querySelectorAll('.last-updated').forEach(el => {
        el.textContent = ${formattedDate} ${formattedTime};
    });
}

function atualizarDados() {
    const activeCount = Math.floor(Math.random() * 30);
    const unresponsiveCount = Math.floor(Math.random() * 10);
    const stoppedCount = Math.floor(Math.random() * 5);

    document.getElementById('active-count').textContent = ${activeCount} ✔;
    document.getElementById('unresponsive-count').textContent = unresponsiveCount;
    document.getElementById('stopped-count').textContent = stoppedCount;
}

setInterval(() => {
    atualizarHorario();
    atualizarDados();
}, 60000);

atualizarHorario();
atualizarDados();