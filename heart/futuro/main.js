const cube = document.querySelector('.cube');
let isDragging = false;
let lastX, lastY;

cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    cube.style.transform = `rotateX(${dy}deg) rotateY(${dx}deg)`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});