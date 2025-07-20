const sections = [
  {
    image: '1.jpg',
    title: 'Hot Drinks',
    items: [
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
      { name: 'Tea', price: '₹20' },
      { name: 'Coffee', price: '₹30' },
    ],
  },
  {
    image: '2.jpg',
    title: 'Cold Drinks',
    items: [
      { name: 'Cola', price: '₹25' },
      { name: 'Lemonade', price: '₹30' },
    ],
  },
  {
    image: '2.jpg',
    title: 'Snacks',
    items: [
      { name: 'Sandwich', price: '₹50' },
      { name: 'Samosa', price: '₹15' },
    ],
  }
];

let currentIndex = 0;

function renderSection(index) {
  const section = sections[index];
  document.getElementById('menu-bg').src = section.image;

  const menuHTML = `
    <div class="menu-block">
      <h2>${section.title}</h2>
      <ul>
        ${section.items.map(item => `<li><span>${item.name}</span><span>${item.price}</span></li>`).join('')}
      </ul>
    </div>
  `;

  document.getElementById('menu-sections').innerHTML = menuHTML;
}

function prevSection() {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  renderSection(currentIndex);
}

function nextSection() {
  currentIndex = (currentIndex + 1) % sections.length;
  renderSection(currentIndex);
}

// Initial load
renderSection(currentIndex);


// Swipe detection
let startX = 0;
let endX = 0;

const container = document.querySelector('.menu-container');

container.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = endX - startX;
  const threshold = 50; // Minimum swipe distance

  if (diff > threshold) {
    prevSection(); // Swipe right
  } else if (diff < -threshold) {
    nextSection(); // Swipe left
  }
}