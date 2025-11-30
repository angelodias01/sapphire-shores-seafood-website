document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));


    // --- Menu Tabs Functionality ---
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all categories
            menuCategories.forEach(cat => cat.classList.remove('active'));
            // Show target category
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });


    // --- Smooth Scroll for anchor links (optional enhancement) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
             // Only handle if it's actually an anchor link and not just a placeholder '#'
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Offset for fixed header
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // --- Reservation Form Alert (Mockup) ---
    const reservationForm = document.querySelector('.reservation-form');
    if(reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Obrigado! O seu pedido de reserva foi recebido. Entraremos em contacto brevemente para confirmar.");
            reservationForm.reset();
        })
    }

});