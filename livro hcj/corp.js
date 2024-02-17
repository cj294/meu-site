const link = document.querySelector('.link2');
link.addEventListener('click', () => {
    // Obtém a posição Y do texto de destino
    const destino = document.querySelector('#dem1').offsetTop;

    // Rola a página até o texto de destino
    window.scrollTo({
        top: destino,
        behavior: 'smooth' // Rola suavemente
    });
});
const link1 = document.querySelector('.link1');
link1.addEventListener('click', () => {
    const destino = document.querySelector('#tag').offsetTop;
    window.scrollTo({
        top: destino,
        behavior: 'smooth' // Rola suavemente
    });
});
const link3 = document.querySelector('.link3');
link3.addEventListener('click', () => {
    const destino = document.querySelector('#tag2').offsetTop;
    window.scrollTo({
        top: destino,
        behavior: 'smooth' // Rola suavemente
    });
});