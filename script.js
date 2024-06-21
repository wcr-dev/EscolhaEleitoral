window.addEventListener('resize', adjustRectangle);
window.addEventListener('mousemove', handleMouseMove);

function adjustRectangle() {
    const rectangle = document.querySelector('.rectangle');
    const text = document.querySelector('.artistic-text');
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Ajuste aqui se precisar alterar o comportamento de ajuste dinâmico
    if (width / height < 0.5) {
        rectangle.style.width = '80%';
        rectangle.style.height = '85%';
    } else {
        rectangle.style.width = '80%';
        rectangle.style.height = '85%';
    }

    adjustFontSize();
}

function handleMouseMove(event) {
    const text = document.querySelector('.artistic-text');
    const { clientX: x, clientY: y } = event;
    const { innerWidth: width, innerHeight: height } = window;

    const moveX = (x / width - 0.5) * 10;
    const moveY = (y / height - 0.5) * 10;

    text.style.transform = `translate(${moveX}px, ${moveY}px) rotate(-5deg)`;
}

function adjustFontSize() {
    const rectangle = document.querySelector('.rectangle');
    const text = document.querySelector('.artistic-text');
    const rectHeight = rectangle.clientHeight;
    const rectWidth = rectangle.clientWidth;

    // Ajuste a proporção do tamanho da fonte e altura da linha conforme necessário
    let fontSize = rectHeight / 15;  // Exemplo de proporção para o tamanho da fonte
    let lineHeight = fontSize * 1.5; // Proporção para a altura da linha

    text.style.fontSize = `${fontSize}px`;
    text.style.lineHeight = `${lineHeight}px`;

    // Ajuste para garantir que o texto se ajuste horizontalmente
    let scale = Math.min(rectWidth / text.scrollWidth, 2);
    text.style.transform = `scale(${scale}) rotate(-5deg)`;
}

document.addEventListener('DOMContentLoaded', adjustRectangle);


