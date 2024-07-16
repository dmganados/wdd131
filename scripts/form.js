document.addEventListener('DOMContentLoaded', () => {
    const productArray = [
        {name: 'Cellphone'},
        {name: 'Laptop'},
        {name: 'Desktop'},
        {name: 'Tablet'}
    ];

    const selectProduct = document.getElementById('productName');

    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        selectProduct.appendChild(option);
    });
});