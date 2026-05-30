// ====== PRODUCT DATA ======
const products = [
    {
        name: "Explorer Pro 50L",
        category: "travel",
        brand: "WildGear",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
        badge: "Best Seller"
    },
    {
        name: "JetSet Carry-On",
        category: "travel",
        brand: "SkyLine",
        img: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=600&h=400&fit=crop"
    },
    {
        name: "Happy Dino",
        category: "Schoolbag",
        brand: "Trust",
        img: "https://i.ibb.co/jvfQ5Lx5/Photo-from-Komil-Dudhwala-16.jpg",
        badge: "Latest"
    },
    {
        name: "Campus Light 2026",
        category: "school",
        brand: "EduCarry",
        img: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=600&h=400&fit=crop"
    },
    {
        name: "TrailBlazer 40L",
        category: "rucksack",
        brand: "MountainX",
        img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=400&fit=crop",
        badge: "New Arrival"
    },
    {
        name: "Urban Trek 30",
        category: "rucksack",
        brand: "CityPack",
        img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&h=400&fit=crop"
    },
    {
        name: "Elite Briefcase",
        category: "executive",
        brand: "GentManor",
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop"
    },
    {
        name: "Boardroom Slim",
        category: "executive",
        brand: "CorpStyle",
        img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=400&fit=crop",
        badge: "Premium"
    },
    {
        name: "TechSleeve 15\" Pro",
        category: "laptop",
        brand: "DigiGuard",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
        name: "ProShield Backpack",
        category: "laptop",
        brand: "TechCarry",
        img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop",
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