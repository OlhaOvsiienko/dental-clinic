const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

const subtitle = document.querySelector('.services-left__subtitle');

const colors = [
    'pink',
    'orange',
    'blue',
    'yellow'
];

subtitle.style.color = getRandom(colors);