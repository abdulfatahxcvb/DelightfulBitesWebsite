document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Image Zoom Effect in Gallery
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Form Validation for Contact Form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields before submitting.');
        } else {
            alert('Thank you for your message! We will get back to you soon.');
        }
    });

    window.initMap = () => {
        const storeLocation = { lat: 5.5589, lng: -0.2052 }; // Example location
    
        // Initialize the map
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: storeLocation,
        });
    
        // Add a marker using AdvancedMarkerElement
        const marker = new google.maps.marker.AdvancedMarkerElement({
            position: storeLocation,
            map: map,
            title: "Tea Baa Restaurant",
        });
    };
    
});
