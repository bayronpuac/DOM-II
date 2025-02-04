// Your code goes here


//Turns the "Welcome to Fun Bus to Orange and Purple"
const test = document.querySelector('h2')
test.addEventListener("mouseover", e => {
    event.target.style.color ="purple";
    setTimeout( function(){
        event.target.style.color = "blue";
    })
})

test.addEventListener("mouseout", e => {
    event.target.style.color = "orange";
    setTimeout(function(){
        event.target.style.color ="white";
    })
})

//Scales all of the images to a bigger size
const scaleUp = document.querySelectorAll('img');
scaleUp.forEach(item => {
  item.addEventListener('mouseenter', event => {
    item.style.transform = 'scale(1.3)';
    item.style.transition = ' transform 0.5s';
  })
})
const scaleDown = document.querySelectorAll('img');
scaleDown.forEach(item => {
  item.addEventListener('mouseleave', event => {
    item.style.transform = 'scale(1)';
    item.style.transition = 'transform 0.5s';
  })
})

//Allows the nav to grow in size

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
let scale = 1;
  const el = document.querySelector('nav');
  el.onwheel = zoom;

//Loads a message 

  window.addEventListener('load', e => {
    console.log('page is fully loaded');
    alert('This is the load event');
  });

//Turns the nav background to aqua
  const nav = document.querySelector(".nav");
  nav.addEventListener("dblclick", (e) => {
    e.target.style.backgroundColor = 'aqua';
  });

//Changes the intro when clicked
const newDesc = document.querySelector('.intro p');

newDesc.addEventListener('click', e => {
  newDesc.style.backgroundColor = "aqua";
  newDesc.textContent = "This is a new description!"
})

// Drag the fun bus intro img to 50%
const funBusBanner = document.querySelector(".intro img" );
funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(.5)');

//Says Ouch when resizing the window.
window.addEventListener('resize', () => alert("OUCHHHH!!!!"));

// Prevents the nav links from reloading
nav.addEventListener('click', (e) => {e.preventDefault();
  console.log("clicked on navlink");}
  );
