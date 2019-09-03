// Your code goes here


//
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

//Mouseenter/Mouseleave on all the pictures
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

//Wheel on the Nav

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