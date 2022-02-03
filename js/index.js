// Active Hamburger From Bulma 
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        let elmentClassList = el.classList
        let isActive = elmentClassList.toggle('is-active')
        menuMob(isActive, elmentClassList)

      });
    });
  }

});

// Menu Bar function 
function menuMob(isActive, elmentClassList) {
  const mobList = document.querySelector('.mob-list')
  // Chek class is-active 
  if (!isActive) {
    mobList.classList.add('d-none')

  } else {
    mobList.classList.remove('d-none')
  }
  // When Resize The Browser
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      mobList.classList.add('d-none')
      elmentClassList.remove('is-active')
    }
  })

}





// Counters
const numbers = document.querySelectorAll('.numbers')
const speed = 200

numbers.forEach(counter => {

  const update = () => {
    // Get Counters From HTML
    let target = +counter.getAttribute("data-counter")
    let count = +counter.textContent
    const inc = target / speed
    if (count < target) {
      counter.textContent = Math.ceil(count + inc)
      setTimeout(update, 10)
    } else {
      counter.textContent = target
    }
  }

  update()


})



//  Go Top Button
const arrUp = document.querySelector('.arr-up')
const mainNavbar = document.querySelector('#mainNavbar')

window.addEventListener('scroll', () => {


  if (!(scrollY > 694)) {

    arrUp.style.display = "none"
    goTop()


  } else {
    arrUp.style.display = "inline"
  }

  if (scrollY > 63) {
    mainNavbar.classList.add("fixed")
  } else {
    mainNavbar.classList.remove("fixed")
  }


})

// Call Go Top Button
goTop()

// Go Top Function
function goTop() {
  arrUp.onclick = (e) => {
    console.log("clicked");
    // e.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
}

//  Current Time 
document.getElementById('currentTime').textContent = new Date().getFullYear()