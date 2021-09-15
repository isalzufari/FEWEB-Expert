import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json'

console.log('Hello Coders! :)');

let datarest = '';
data.restaurants.forEach((restaurant) => {
    datarest += `
    <article class="post-item" id="${restaurant.id}">
        <img class="post-item__thumbnail"
            src="${restaurant.pictureId}"
            alt="${restaurant.name}">
        <div class="post-item__content">
            <p class="post-item__date">Rating <span class="post-item__date__author">${restaurant.rating}</span>
            </p>
            <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
            <p class="post-item__description">${restaurant.description}</p>
        </div>
    </article>
    `;
});

document.querySelector('.post').innerHTML = datarest;

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const bodyElement = document.querySelector("body");

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

bodyElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
});