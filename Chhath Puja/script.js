document.addEventListener('DOMContentLoaded', function() {
    const menu = [
        { name: "Thekua", description: "Traditional sweet made with wheat flour, jaggery, and ghee.", price: "₹40" },
        { name: "Kasar", description: "Rice flour laddoo with jaggery and coconut.", price: "₹30" },
        { name: "Sweets Platter", description: "Assorted festival sweets.", price: "₹80" },
        { name: "Seasonal Fruits", description: "Fresh fruits offered during Chhath Puja.", price: "₹50" },
        { name: "Milk & Sugarcane Juice", description: "Refreshing drinks for the festival.", price: "₹25" }
    ];

    const menuSection = document.getElementById('menu');
    menu.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <strong>${item.price}</strong>
        `;
        menuSection.appendChild(div);
    });
});
