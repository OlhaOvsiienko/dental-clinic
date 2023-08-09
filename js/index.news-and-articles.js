const title = document.querySelector('.news-and-articles__subtitle');
title.innerText = '- News and Articles -';
title.style.color = 'var(--main-color-first)';

const products = [
    {
        id: '1',
        name: 'Treatment Options to Keep Kids Teeth Healthy' ,
        date: 'Teeth Care | 11.12.2022',
        image: 'img/clean.jpeg',
        description: 'As children grow, their milk teeth can become damaged and need attention from a dentist or orthodontist in order to stay healthy and strong.',
        button: 'Read More'
    },

    {
        id: '2',
        name: 'Teach Your Children How to Properly Care for their Teeth' ,
        date: 'Healthy Habits | 05.05.2023',
        image: 'img/smile.jpeg',
        description: 'Teaching kids the importance of oral hygiene, and how to properly care for their teeth, can help them maintain a healthy smile for years to come.',
        button: 'Read More'
    }
]

renderProducts(products);

function renderProducts(products) {
    const productsContainer = document.querySelector('.news-and-articles__content');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += `
        <article class="product-card">
            <div class="news-and-articles__content-block">
                <img class="content-block__image" src="${product.image}" alt="${product.name}">
                <p class="content-block__subtitle">${product.date}</p>
                <h3 class="content-block__title">${product.name}</h3>
                <p class="content-block__subtitle-block">${product.description}</p>
                <a href="#" class="content-block__link" type="obey">${product.button}</a>
            </div>
        </article>`;
    }
}
