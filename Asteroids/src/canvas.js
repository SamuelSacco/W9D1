document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(250, 250, 80, 0, 2 * Math.PI, true);
    ctx.fillStyle = 'blue'; // changes the color on the 'paint brush' for the next time we 'fill', existing paint on the canvas doesn't change
    ctx.fill();
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 30;
    ctx.stroke();
});