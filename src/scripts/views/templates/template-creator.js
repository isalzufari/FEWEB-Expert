import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail"> 
    <div class="detail__top">
      <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="restaurant__info">
          <h3>${restaurant.name}</h3><br>
          <h4>Kota</h4>
          <span>${restaurant.city}</span>
          <h4>Alamat</h4>
          <span>${restaurant.address}</span>
          <h4>Rating</h4>
          <span>⭐️ ${restaurant.rating}</span>
          
          <h4>Category</h4>
          <div>${restaurant.categories.map((categorie) => `
            <span>${categorie.name}</span>
          `)}</div>
      </div>
    </div>

    <div class="description">
      <h3>Detail</h3>
      <p>${restaurant.description}</p>
    </div>
    
    <div class="detail__menu">
      <h3>Menu</h3>
      <div class="content">
        <h4>Makanan</h4>
        <div class="menu">
          ${restaurant.menus.foods.map((food) => `
            <div class="menu-item">
              <p class="item">${food.name}</p>
            </div>
          `).join('')}
        </div>
        <h4>Minuman</h4>
        <div class="menu">
          ${restaurant.menus.drinks.map((drink) => `
            <div class="menu-item">
              <p class="item">${drink.name}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="restaurant__reviews">
      <h3>Review Pelanggan</h3>
      <div>${restaurant.customerReviews.map((customerReview) => `
        <div class="review">
          <p><span class="name">${customerReview.name}</span> . <span class="date">${customerReview.date}</span></p>
          <p class="review-text">${customerReview.review}</p>
        </div>
      `).join('')}</div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img width="250px" height="250px" class="lazyload restaurant-item__header__poster" alt="${restaurant.name}"
            src=""
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
            crossorigin="anonymous">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p><b>${restaurant.city}</b> - ${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
