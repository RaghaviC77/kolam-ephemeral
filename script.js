let drawing = false;

function toggleDrawing() {
    drawing = !drawing;
    if (!drawing) {
        clearCanvas();
    }
}

function clearCanvas() {
    const canvas = document.getElementById("kolamCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('mouseover', () => {
        const contentBox = document.getElementById('content-box');
        contentBox.innerText = dot.dataset.content;
        contentBox.style.opacity = '1';
        contentBox.style.display = 'block';
    });

    dot.addEventListener('mouseleave', () => {
        const contentBox = document.getElementById('content-box');
        contentBox.style.opacity = '0';
        setTimeout(() => {
            contentBox.style.display = 'none';
        }, 800);
    });
});