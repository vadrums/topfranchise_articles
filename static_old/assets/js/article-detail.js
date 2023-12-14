
// Select the elements
const readmoreElements = document.querySelectorAll('.readmore-article');
const kwiz = document.querySelector('.blog-article-kwiz-block');
const readmoreContainer = document.querySelector('.blog-article-readmore-articles__container');

// Function to calculate the distance between elements
function calculateDistance() {
  const kwizRect = kwiz.getBoundingClientRect();
  const readmoreRect = readmoreContainer.getBoundingClientRect();
  const distance = kwizRect.top - readmoreRect.top - 35;
  readmoreContainer.style.height = distance + 'px';
}

// Function to make elements sticky
function makeSticky() {
  let prevElTopOffset = 0;

  readmoreElements.forEach((element, index) => {
    const contentRect = element.getBoundingClientRect();
    const elementHeight = element.offsetHeight;

    if (contentRect.top <= prevElTopOffset) {
      // Element is at the top or below the previous sticky element

      if (!element.classList.contains('readmore-article_sticky')) {
        // Element is not already sticky
        element.classList.add('readmore-article_sticky');
        element.style.top = prevElTopOffset + 'px';
      }
    } else if (element.classList.contains('readmore-article_sticky')) {
      // Element is no longer sticky, remove the class
      element.classList.remove('readmore-article_sticky');
      element.style.top = ''; // Remove the top style
    }

    if (element.classList.contains('readmore-article_sticky')) {
      // If an element is sticky, update the top offset for the next sticky element
      prevElTopOffset += elementHeight;
    }
  });
}

// Initial calculations
calculateDistance();

// Listen for scroll events
window.addEventListener('scroll', makeSticky);


new Swiper('.looked-block .swiper-container', {
  navigation: {
    nextEl: '.looked-block .swiper-button-next',
    prevEl: '.looked-block .swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.15,
      spaceBetween: 14
    },
    480: {
      slidesPerView: 1.7,
      spaceBetween: 14
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 24
    }
  },
  speed: 800,
})

/* FAQ ACC */
var acc = document.getElementsByClassName("blog-article-content-faq__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* CONTENTS MOBILE SHOWMORE */
var accContents = document.getElementsByClassName("blog-article-contents-mobile__container-top");
accContents[0].addEventListener("click", function () {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + 20 + "px";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

/* CONTENTS SIDEBAR SHOWMORE */
var accContentsSidebarShowMoreCommonContainer = document.getElementsByClassName
("blog-article-contents-mobile__showmore");
var accContentsSidebarShowMore = document.getElementsByClassName
  ("blog-article-contents-mobile__showmore-text_more");
var accContentsSidebarShowLess = document.getElementsByClassName
  ("blog-article-contents-mobile__showmore-text_less");
var accContentsSidebarItemsContainer = document.getElementsByClassName("blog-article-contents-sidebar__items");
var accContentsSidebarItems = document.getElementsByClassName("blog-article-contents-sidebar__item");
var accContentsMinHeight = 0;

if (accContentsSidebarItems.length > 5) {
  var commonContainerHPositon = accContentsSidebarItemsContainer[0].getBoundingClientRect();
  var minHeightItemPossition = accContentsSidebarItems[4].getBoundingClientRect();

  var minHeightValue = minHeightItemPossition.bottom - commonContainerHPositon.top;

  // accContentsSidebarItemsContainer[0].style.maxHeight = minHeightValue + "px";
  // accContentsSidebarShowMore[0].classList.toggle("ui-display-none"); 

  accContentsSidebarShowLess[0].classList.toggle("ui-display-none");
  accContentsSidebarShowMoreCommonContainer[0].classList.toggle("ui-display-none");
}
// Show More
accContentsSidebarShowMore[0].addEventListener("click", function () {
  this.classList.toggle("ui-display-none");
  accContentsSidebarShowLess[0].classList.toggle("ui-display-none");
  var panel = accContentsSidebarItemsContainer[0];
  if (!panel.style.maxHeight) {
    accContentsSidebarItemsContainer[0].style.maxHeight = panel.scrollHeight + "px";
  } else {
    panel.style.maxHeight = null;
  }
});

// Show Less
accContentsSidebarShowLess[0].addEventListener("click", function () {
  this.classList.toggle("ui-display-none");

  var accContentsSidebarShowMore = document.getElementsByClassName
    ("blog-article-contents-mobile__showmore-text_more");
  var accContentsSidebarItemsContainer = document.getElementsByClassName("blog-article-contents-sidebar__items");
  var accContentsSidebarItems = document.getElementsByClassName("blog-article-contents-sidebar__item");
  var accContentsMinHeight = 0;
  var commonContainerHPositon = accContentsSidebarItemsContainer[0].getBoundingClientRect();
  var minHeightItemPossition = accContentsSidebarItems[4].getBoundingClientRect();
  var minHeightValue = minHeightItemPossition.bottom - commonContainerHPositon.top;
  accContentsSidebarItemsContainer[0].style.maxHeight = minHeightValue + "px";
  accContentsSidebarShowMore[0].classList.toggle("ui-display-none");
  if (accContentsSidebarItems.length > 5) {
    accContentsSidebarItemsContainer[0].style.maxHeight = minHeightValue + "px";
  }
});