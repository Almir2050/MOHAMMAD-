window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('field');
    const ctx = canvas.getContext('2d');
  
    // Draw football field
    ctx.fillStyle = '#4CAF50'; // Green color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Draw football
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF'; // White color
    ctx.fill();
    ctx.closePath();
  });