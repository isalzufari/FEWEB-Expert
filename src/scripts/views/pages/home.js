import RestaurantResource from '../../data/restaurant-resource';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero-image">
        <div class="hero-text">
            <h1 class="hero-title">TETAP AMAN DAN SEHAT</h1>
            <p class="hero-tagline">
                Welcome to the one and only <b>Rood</b>
            </p>
        </div>
    </div>
    <div class="content">
        <h2 class="content__heading">Lobby</h2>
        <div id="restaurants" class="restaurants">

        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantResource.restauranList();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
