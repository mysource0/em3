// Replace this with actual product data
const products = [
    {
        name: 'Product 1',
        description: 'Description for Product 1.',
        image: 'product1.jpg',
        price: 19.99,
    },
    {
        name: 'Product 2',
        description: 'Description for Product 2.',
        image: 'product2.jpg',
        price: 29.99,
    },
    {
        name: 'Product 3',
        description: 'Description for Product 3.',
        image: 'product3.jpg',
        price: 39.99,
    },
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById('products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="alert('Product added to cart!')">Buy Now</button>
        `;
        productsSection.appendChild(productCard);
    });
}

// Display products when the page is loaded
window.onload = displayProducts;
