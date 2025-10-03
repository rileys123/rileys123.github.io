// Pulse animation on hover
document.querySelectorAll('.desk-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1) rotate(-5deg)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});
