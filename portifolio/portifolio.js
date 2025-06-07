// Botão "Voltar ao Topo"
const btnTopo = document.createElement('button');
btnTopo.textContent = '↑ Topo';
btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '30px';
btnTopo.style.right = '30px';
btnTopo.style.display = 'none';
btnTopo.style.padding = '10px 15px';
btnTopo.style.borderRadius = '8px';
btnTopo.style.border = 'none';
btnTopo.style.background = '#333';
btnTopo.style.color = '#fff';
btnTopo.style.cursor = 'pointer';
btnTopo.style.zIndex = '1000';
document.body.appendChild(btnTopo);

window.addEventListener('scroll', () => {
    btnTopo.style.display = window.scrollY > 200 ? 'block' : 'none';
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animação suave ao clicar em links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});