let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
let tween = gsap.to(".title", { 
    rotation: 0,
    y:0,
    duration: 2,
    opacity:1,
    startAt: {y: -300, opacity: 0},
    ease:"bounce.out"
});
gsap.to(".entry1", { 
    startAt:{y:-200,opacity:0},
    y: 0,
    x: 0,
    duration: 2,
    opacity:1
});
gsap.to(".entry2", { 
    startAt:{y:200,opacity:0},
    y: 0,
    x: 0,
    duration: 2,
    opacity:1
});