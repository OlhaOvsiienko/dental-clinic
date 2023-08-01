const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

const subtitle = document.querySelector('.services-left__subtitle');

const colors = [
    'pink',
    'orange',
    'blue',
    'black',
    'green'
];

function changeColor() {
    subtitle.style.color = getRandom(colors);
}

setInterval(changeColor, 2000); 

const slides = [
    '<div class="services__card-restorative services__card">' +
    '  <div class="services__card-restorative-bg">' +
    '    <img class="services__card-restorative-bg--img" src="img/tooth-crown.svg" alt="Tooth-crown">' +
    '  </div>' +
    '  <h3 class="services__card-restorative--title">Restorative <br> Dentistry</h3>' +
    '  <p class="services__card-restorative--text">We improve the health and aesthetics of your child\'s smile.</p>' +
    '  <p class="services__card-restorative--line"></p>' +
    '  <ul class="services__card-restorative--list">' +
    '    <li class="services__card-restorative--list-item">Dental crowns;</li>' +
    '    <li class="services__card-restorative--list-item">Dental fillings;</li>' +
    '    <li class="services__card-restorative--list-item">Dental sealants;</li>' +
    '    <li class="services__card-restorative--list-item">Performing root canals.</li>' +
    '  </ul>' +
    '  <button class="services__card-restorative--button" type="submit">Learn More</button>' +
    '</div>',
    '<div class="services__card-preventive services__card">' +
    '  <div class="services__card-preventive-bg">' +
    '    <img class="services__card-preventive-bg--img" src="img/tooth-washing.svg" alt="Tooth-washing">' +
    '  </div>' +
    '  <h3 class="services__card-preventive--title">Preventive Dental Care</h3>' +
    '  <p class="services__card-preventive--text">It is essential for ensuring that kids\' teeth are in proper condition.</p>' +
    '  <p class="services__card-preventive--line"></p>' +
    '  <ul class="services__card-preventive--list">' +
    '    <li class="services__card-preventive--list-item">Dental cleanings;</li>' +
    '    <li class="services__card-preventive--list-item">Dental sealants;</li>' +
    '    <li class="services__card-preventive--list-item">Fluoride treatments;</li>' +
    '    <li class="services__card-preventive--list-item">Regular checkups.</li>' +
    '  </ul>' +
    '  <button class="services__card-preventive--button" type="submit">Learn More</button>' +
    '</div>',
    '<div class="services__card-treatment services__card">' +
    '  <div class="services__card-treatment-bg">' +
    '    <img class="services__card-treatment-bg--img" src="img/tooth-plus.svg" alt="Tooth-plus">' +
    '  </div>' +
    '  <h3 class="services__card-treatment--title">Dental Treatment</h3>' +
    '  <p class="services__card-treatment--text">Our pediatric dentists will carefully treat your child\'s teeth if necessary...</p>' +
    '  <p class="services__card-treatment--line"></p>' +
    '  <ul class="services__card-treatment--list">' +
    '    <li class="services__card-treatment--list-item">Dental emergencies;</li>' +
    '    <li class="services__card-treatment--list-item">Tooth extraction;</li>' +
    '    <li class="services__card-treatment--list-item">Urgent dental treatments;</li>' +
    '    <li class="services__card-treatment--list-item">Orthodontic treatments.</li>' +
    '  </ul>' +
    '  <button class="services__card-treatment--button" type="submit">Learn More</button>' +
    '</div>'
];
  

const carouselSlide = document.querySelector('.services__cards-carousel');

let currentSlide = 0;

function renderSlide() {
  carouselSlide.innerHTML = slides[currentSlide];
  if (window.innerWidth >= 768) {
      const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      carouselSlide.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth >= 1024 ) {
          const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
          carouselSlide.innerHTML += slides[thirdSlideIdx];
      }
  }
}

renderSlide();

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
  }

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
  }

const btnNext = document.getElementById('nextBtn');
const btnPrev = document.getElementById('prevBtn');

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);