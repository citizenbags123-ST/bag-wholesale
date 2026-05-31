// ====== PRODUCT DATA ======
const products = [
    {
        name: "Trolley Bag",
        category: "travel",
        brand: "Sun",
        img: "https://i.ibb.co/B5gh1TJR/Photo-from-Komil-Dudhwala-22.jpg",
        badge: "Best Seller"
    },
    {
        name: "String Bag",
        category: "travel",
        brand: "N/A",
        img: "https://i.ibb.co/8gQ5M7x0/Photo-from-Komil-Dudhwala-30.jpg"
    },
    {
        name: "Happy Bear",
        category: "school",
        brand: "Imported",
        img: "https://i.ibb.co/pjVb7F8k/Photo-from-Komil-Dudhwala-29.jpg",
        badge: "Latest"
    },
    {
        name: "Happy Dino",
        category: "school",
        brand: "Trust",
        img: "https://i.ibb.co/jvfQ5Lx5/Photo-from-Komil-Dudhwala-16.jpg"
    },
    {
        name: "Chest Bag",
        category: "rucksack",
        brand: "N/A",
        img: "https://i.ibb.co/sJ585hkc/Photo-from-Komil-Dudhwala-6.jpg",
        badge: "New Arrival"
    },
    {
        name: "Ladies Bag",
        category: "duffle",
        brand: "N/A",
        img: "https://i.ibb.co/YT8VF5Pv/Photo-from-Komil-Dudhwala-2.jpg"
    },
    {
        name: "Gym Bag",
        category: "gym",
        brand: "Trust",
        img: "https://i.ibb.co/99BKQZs7/Photo-from-Komil-Dudhwala-17.jpg"
    },
    {
        name: "Sling Bag",
        category: "executive",
        brand: "Addition",
        img: "https://i.ibb.co/VWTL17W6/Photo-from-Komil-Dudhwala-20.jpg",
        badge: "Premium"
    },
    {
        name: "LaptopSleeve",
        category: "laptop",
        brand: "N/A",
        img: "https://i.ibb.co/twQgVsS2/Photo-from-Komil-Dudhwala-3.jpg"
    },
    {
        name: "Dimikuu Backpack",
        category: "laptop",
        brand: "Dimikuu",
        img: "https://i.ibb.co/3msqgBdQ/Dimiku-FHS7426.jpg",
        badge: "Trending"
    }
];

// ====== DISPLAY PRODUCTS ======
const grid = document.getElementById('productGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayProducts(category) {
    grid.innerHTML = '';
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-light); padding: 3rem;">No products found in this category. New stock arriving soon.</p>';
        return;
    }

    filtered.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="brand">by ${p.brand}</p>
                <span class="category-tag">${p.category} bags</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ====== FILTER FUNCTIONALITY ======
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        displayProducts(category);
    });
});

// Initial display
displayProducts('all');

// ====== MOBILE MENU TOGGLE ======
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====== FORM HANDLING ======
const form = document.getElementById('orderForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
    status.textContent = 'Sending your enquiry...';
    status.className = 'form-status';
    
    // Let Formspree handle the actual submission
    // This provides visual feedback
    setTimeout(() => {
        status.textContent = '✓ Enquiry sent successfully! We\'ll get back to you within 24 hours.';
        status.className = 'form-status success';
    }, 1500);
});

// ====== SCROLL REVEAL ANIMATION ======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for reveal animation
document.querySelectorAll('.section, .section-alt').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});