
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  
  if (!menuIcon || !navbar) {
    console.error('Menü elemanları bulunamadı!');
    return;
  }

  menuIcon.addEventListener('click', function() {
    console.log('Menü tıklandı!'); 
    navbar.classList.toggle('active');
    

    if (this.classList.contains('bx-menu')) {
      this.classList.remove('bx-menu');
      this.classList.add('bx-x');
    } else {
      this.classList.remove('bx-x');
      this.classList.add('bx-menu');
    }
  });
});