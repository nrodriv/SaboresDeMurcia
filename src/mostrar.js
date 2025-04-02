// Código del botón
document.addEventListener('DOMContentLoaded', () => {
  const verMas = document.getElementById('ver-mas');
  const verMenos = document.getElementById('ver-menos');
  const extras = document.querySelectorAll('.extra-receta');

  verMas.addEventListener('click', () => {
    extras.forEach(card => card.classList.add('visible'));
    verMas.classList.add('hidden');
    verMenos.classList.remove('hidden');
  });

  verMenos.addEventListener('click', () => {
    extras.forEach(card => card.classList.remove('visible'));
    verMas.classList.remove('hidden');
    verMenos.classList.add('hidden');
  });
});


