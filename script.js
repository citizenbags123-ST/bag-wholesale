// Dummy product data – replace these with your real products later
const products = [
    { name: "Explorer Pro 50L", category: "travel", brand: "WildGear", img: "https://via.placeholder.com/300x200?text=Travel+Bag" },
    { name: "JetSet Carry-On", category: "travel", brand: "SkyLine", img: "https://via.placeholder.com/300x200?text=Travel+Bag" },
    { name: "KidzPack Classic", category: "school", brand: "BrightSchool", img: "https://via.placeholder.com/300x200?text=School+Bag" },
    { name: "Campus Light", category: "school", brand: "EduCarry", img: "https://via.placeholder.com/300x200?text=School+Bag" },
    { name: "TrailBlazer 40", category: "rucksack", brand: "MountainX", img: "https://via.placeholder.com/300x200?text=Rucksack" },
    { name: "Urban Trek 30", category: "rucksack", brand: "CityPack", img: "https://via.placeholder.com/300x200?text=Rucksack" },
    { name: "Elite Briefcase", category: "executive", brand: "GentManor", img: "https://via.placeholder.com/300x200?text=Executive+Bag" },
    { name: "Boardroom Slim", category: "executive", brand: "CorpStyle", img: "https://via.placeholder.com/300x200?text=Executive+Bag" },
    { name: "TechSleeve 15", category: "laptop", brand: "DigiGuard", img: "https://via.placeholder.com/300x200?text=Laptop+Bag" },
    { name: "ProShield Backpack", category: "laptop", brand: "TechCarry", img: "https://via.placeholder.com/300x200?text=Laptop+Bag" }
];

// Get the product grid container
const grid = document.getElementById('productGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Function to display products based on category
function displayProducts(category) {
    grid.innerHTML = ''; // clear
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Brand: ${p.brand}</p>
        `;
        grid.appendChild(card);
    });
}

// Add click event to filter buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add to clicked button
        btn.classList.add('active');
        // Get category from data attribute
        const category = btn.getAttribute('data-category');
        displayProducts(category);
    });
});

// Initially show all products
displayProducts('all');

// Basic form submission handling (for user feedback, Formspree handles actual sending)
const form = document.getElementById('orderForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', function(e) {
    // We don't prevent default because Formspree needs the normal submit
    status.textContent = 'Sending enquiry...';
    // Formspree will redirect or show its own confirmation.
    // A better UX: use AJAX, but for simplicity we'll rely on Formspree's thank-you page.
    // You can later configure Formspree to show a custom message.
});