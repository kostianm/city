let night = document.querySelector('.night-btn');
let root = document.querySelector(':root');
let day = document.querySelector('.day-btn');


night.addEventListener('click', (ev) => {
    root.classList.add('night');
   
});

day.addEventListener('click', (ev) => {
    root.classList.remove('night');

});