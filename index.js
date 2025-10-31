const modalCloseBtn = document.getElementById('modalCloseBtn');
modalCloseBtn.addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
const modal = document.getElementById('modal');
modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = 'none';
    }
});
// Сохраним оригинальный header для восстановления
const originalHeader = document.querySelector('header');
let mobileHeader = null;
// Сохраним исходный блок брендов для восстановления
const originalBrandsSlider = document.querySelector('.brands__slider');
const originalBrandsParent = originalBrandsSlider ? originalBrandsSlider.parentElement : null;
const originalBrandsNextSibling = originalBrandsSlider ? originalBrandsSlider.nextElementSibling : null;

function toggleHeader() {
  const currentHeader = document.querySelector('header');
  const currentMobileHeader = document.querySelector('header__mobile');

  if (window.innerWidth <= 375) {
    // Удаляем оригинальный header, если он есть
    if (currentHeader) {
      currentHeader.remove();
    }
    // Добавляем мобильный header, если его нет
    if (!currentMobileHeader) {
      mobileHeader = document.createElement('header');
      mobileHeader.className = 'header__mobile';
      document.body.prepend(mobileHeader);
      const headerTop = document.createElement('div');
      headerTop.className = 'header__mobile-top';
      const headerLeft = document.createElement('div');
      headerLeft.className = 'header__mobile-left';
      headerLeft.innerHTML = `<img src="assets/images/burgermenu.svg" alt="burger-menu-icon" class="header__mobile-left-burger">`;
      headerLeft.innerHTML += `<img src="assets/images/search.svg" alt="search-icon" class="header__mobile-left-search">`;
      mobileHeader.appendChild(headerLeft);
      const headerMiddle = document.createElement('div');
      headerMiddle.className = 'header__mobile-middle';
      headerMiddle.innerHTML = `<img src="assets/images/boardriderssmalllogo.svg" alt="boardriders-logo" class="boardriders-logo">`;
      mobileHeader.appendChild(headerMiddle);
      const headerRight = document.createElement('div');
      headerRight.className = 'header__mobile-right';
      headerRight.innerHTML += `<img src="assets/images/saved.svg" alt="save-icon" class="header__mobile-right-saved">`;
      headerRight.innerHTML += `<img src="assets/images/cart.svg" alt="cart-icon" class="header__mobile-right-cart">`;
      mobileHeader.appendChild(headerRight);
      const headerBottom = document.createElement('div');
      headerBottom.className = 'header__mobile-bottom';
      headerBottom.innerHTML = `<div class="header__gender">
                <a href="#" class="header__gender-text" aria-label="Перейти в раздел для мужчин">Мужчинам</a>
                <a href="#" class="header__gender-text" aria-label="Перейти в раздел для женщин">Женщинам</a>
                <a href="#" class="header__gender-text" aria-label="Перейти в раздел для детей">Детям</a>
            </div>`;
      mobileHeader.appendChild(headerBottom);
      mobileHeader.appendChild(headerTop);
      headerTop.appendChild(headerLeft);
      headerTop.appendChild(headerMiddle);
      headerTop.appendChild(headerRight);
    }
  } else {
    // Удаляем мобильный header, если он есть
    if (currentMobileHeader) {
      currentMobileHeader.remove();
    }
    // Возвращаем оригинальный header, если его нет
    if (!document.querySelector('header')) {
      if (originalHeader) {
        document.body.prepend(originalHeader);
      }
    }
  }
}

function createNewSection() {
    const sliderContainer = document.querySelector('.slider__container');
    const existingCategories = document.querySelector('.categories');
    if (window.innerWidth <= 375) {
        if (sliderContainer && !existingCategories) {
            const categoriesDiv = document.createElement('div');
            categoriesDiv.className = 'categories';
            sliderContainer.insertAdjacentElement('afterend', categoriesDiv);
            categoriesDiv.innerHTML = `
                <div class="categories__title"><h2 class="categories__title-text">Популярные категории</h2></div>
                <div class="categories__navigation">
                    <nav class="categories__navigation-nav" aria-label="Навигация по категориям">
                        <ul class="categories__navigation-list">
                            <li class="categories__navigation-sale-item"><a href="#" class="categories__navigation-sale" aria-label="Перейти к новинкам">Распродажа</a></li>
                            <li class="categories__navigation-text-item"><a href="#" class="categories__navigation-text" aria-label="Перейти к сноубордам">Новинки</a></li>
                            <li class="categories__navigation-text-item"><a href="#" class="categories__navigation-text" aria-label="Перейти к лыжам">Сноуборд</a></li>
                            <li class="categories__navigation-text-item"><a href="#" class="categories__navigation-text" aria-label="Перейти к скейтам">Лыжи</a></li>
                            <li class="categories__navigation-text-item"><a href="#" class="categories__navigation-text" aria-label="Перейти к лонгбордам">Скейт</a></li>
                        </ul>
                        <div class="button__wrapper">
                            <button class="categories__navigation-button" aria-label="Перейти к всем категориям">Показать еще</button>
                            <img src="assets/images/arrowdownblack.svg" alt="arrow-down-black" class="categories__navigation-arrow">
                        </div>
                    </nav>
                </div>
            `;
        }
    }
}


function toggleBrandsSlider() {
  const currentBrandsSlider = document.querySelector('.brands__slider');
  const currentBrandsSliderMobile = document.querySelector('.brands__slider-mobile');

  if (window.innerWidth <= 375) {
    // Удаляем десктопный блок, если он ещё в DOM
    if (currentBrandsSlider) {
      currentBrandsSlider.remove();
    }
    // Создаём мобильный блок, если его нет
    if (!currentBrandsSliderMobile && originalBrandsParent) {
      const mobile = document.createElement('div');
      mobile.className = 'brands__slider-mobile';
      mobile.innerHTML = `
        <div class="brands__slider-mobile-item"><img src="assets/images/heartGray.svg" alt="heart-logo"></div>
        <div class="brands__slider-mobile-item"><img src="assets/images/woodgray.svg" alt="woodland-logo"></div>
        <div class="brands__slider-mobile-item"><img src="assets/images/dcgray.svg" alt="dc-logo"></div>
        <div class="brands__slider-mobile-item"><img src="assets/images/quicksilvergray.svg" alt="quicksilver-logo"></div>
        <div class="brands__slider-mobile-item"><img src="assets/images/billabonggray.svg" alt="billabong-logo"></div>
        <div class="brands__slider-mobile-item"><img src="assets/images/boardridersgray.svg" alt="boardriders-logo"></div>
      `;
      if (originalBrandsNextSibling && originalBrandsNextSibling.parentElement === originalBrandsParent) {
        originalBrandsParent.insertBefore(mobile, originalBrandsNextSibling);
      } else {
        originalBrandsParent.appendChild(mobile);
      }
    }
  } else {
    // Убираем мобильный вариант и возвращаем исходный блок
    if (currentBrandsSliderMobile) {
      currentBrandsSliderMobile.remove();
    }
    if (originalBrandsSlider && originalBrandsParent && !document.contains(originalBrandsSlider)) {
      if (originalBrandsNextSibling && originalBrandsNextSibling.parentElement === originalBrandsParent) {
        originalBrandsParent.insertBefore(originalBrandsSlider, originalBrandsNextSibling);
      } else {
        originalBrandsParent.appendChild(originalBrandsSlider);
      }
    }
  }
}



window.addEventListener('load', toggleHeader);
window.addEventListener('resize', toggleHeader);
window.addEventListener('load', createNewSection);
window.addEventListener('resize', createNewSection);
window.addEventListener('load', toggleBrandsSlider);
window.addEventListener('resize', toggleBrandsSlider);
