// Carrusel de 3 imágenes por pulsera
document.querySelectorAll('.producto').forEach(producto => {
  const imgs = producto.querySelectorAll('img');
  const prevBtn = producto.querySelector('.prev');
  const nextBtn = producto.querySelector('.next');
  let index = 0;

  function mostrarImagen(i) {
    imgs.forEach(img => img.classList.remove('activo'));
    imgs[i].classList.add('activo');
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + imgs.length) % imgs.length;
    mostrarImagen(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % imgs.length;
    mostrarImagen(index);
  });
});
