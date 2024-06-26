document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('coloringCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');

    // Draw a simple image with different regions
    function drawImage() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Example regions
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(150, 150, 100, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'blue';
        ctx.fillRect(300, 300, 100, 100);
    }

    drawImage();

    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const currentColor = colorPicker.value;

        ctx.fillStyle = currentColor;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2); // Draw a small circle
        ctx.fill();
    });

    colorPicker.addEventListener('change', () => {
        // Additional logic can be added if needed when color is changed
    });
});
