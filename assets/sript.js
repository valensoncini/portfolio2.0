// 1. Seleccionamos los elementos del DOM
    const hamburgerBtn = document.querySelector('.btn-hamburguesa');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 2. Función para abrir/cerrar el menú
    function toggleMenu() {
        navMenu.classList.toggle('nav-open');
    }

    // 3. Al hacer clic en el botón, abre/cierra el menú
    hamburgerBtn.addEventListener('click', toggleMenu);

    // 4. (Bonus) Al hacer clic en un enlace (ej: "Proyectos"), 
    //    cierra el menú automáticamente.
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-open')) {
                toggleMenu();
            }
        });
    });