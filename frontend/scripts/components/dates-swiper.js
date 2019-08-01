let newArrivalsDates = new Swiper('.dates-swiper', {
  slideClass: 'date',
  slidesPerView: 7,
  spaceBetween: 0,

  allowTouchMove: false,

  observer: true,
  observerParents: true,
  observeSlideChildren: true,

  breakpoints: {
    991: {
      slidesPerView: 4,

      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
    },

    767: {
      slidesPerView: 2,

      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
    },

    575: {
      slidesPerView: 3,

      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
    },
  }
});


// (function() {

//   const breakpoints = [window.matchMedia( '(max-width: 991px)' ), window.matchMedia( '(max-width: 767px)' ), window.matchMedia( '(max-width: 575px)' )];

//   let newArrivalsDates;

//   const breakpointChecker = function() {
//     for (let i = 0; i < breakpoints.length; i++) {
//       const breakpoint = breakpoints[i];

//       if (breakpoint.matches) {
//         if (newArrivalsDates !== undefined) newArrivalsDates.destroy(true, true);
//         return;
//       } else if (breakpoint.matches === false) {
//         return enableSwiper();
//       }
//     }
//   };

//   const enableSwiper = function() {

//     newArrivalsDates = new Swiper('.dates-swiper', {
//       slideClass: 'date',
//       slidesPerView: 7,
//       spaceBetween: 0,

//       allowTouchMove: false,

//       observer: true,
//       observerParents: true,
//       observeSlideChildren: true,

//       breakpoints: {
//         991: {
//           slidesPerView: 4,

//           navigation: {
//             prevEl: '.prev',
//             nextEl: '.next',
//           },
//         },

//         767: {
//           slidesPerView: 2,
//         },

//         575: {
//           slidesPerView: 3,
//         },
//       }
//     });

//   };

//   for (let i = 0; i < breakpoints.length; i++) {
//     const breakpoint = breakpoints[i];
//     breakpoint.addListener(breakpointChecker);
//   }
//   breakpointChecker();
// })();
