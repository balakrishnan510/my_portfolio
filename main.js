var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        
    },
    mousewheel:true
});
swiper.sliderMove = function (s, e) {
    console.log(s)
}
 const cursor = document.querySelector('.custom-cursor');

  // Move the cursor
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Add click animation
  document.addEventListener('click', () => {
    cursor.classList.add('click');
    setTimeout(() => cursor.classList.remove('click'), 400);
  });

  // Hover effect for clickable items
  const hoverElements = document.querySelectorAll('a, button, .clickable');

  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover-target');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover-target');
    });
  });
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
    
}
