import 'flowbite';

// Control de visibilidad del menú en pantallas pequeñas
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('hs-navbar-header-floating');
    menu.classList.toggle('hidden');
});
