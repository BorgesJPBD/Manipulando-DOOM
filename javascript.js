document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.car-item');
    const btnPrev = document.getElementById('prevBtn');
    const btnNext = document.getElementById('nextBtn');
    const nome = document.getElementById('car-name');
    const descricao = document.getElementById('car-description');

    const dados = [
        { nome: 'Audi', descricao: 'Luxo, tecnologia e desempenho.' },
        { nome: 'Mercedes', descricao: 'Conforto e sofisticação alemã.' },
        { nome: 'Porsche', descricao: 'Velocidade e esportividade elétrica.' }
    ];

    let indice = 0;

    function mostrarImagem(index) {
        imagens.forEach(img => img.classList.remove('active'));
        imagens[index].classList.add('active');
        nome.textContent = dados[index].nome;
        descricao.textContent = dados[index].descricao;
    }

    btnNext.onclick = function () {
        indice = (indice + 1) % imagens.length;
        mostrarImagem(indice);
    };

    btnPrev.onclick = function () {
        indice = (indice - 1 + imagens.length) % imagens.length;
        mostrarImagem(indice);
    };

    setInterval(() => {
        indice = (indice + 1) % imagens.length;
        mostrarImagem(indice);
    }, 4000);
});
