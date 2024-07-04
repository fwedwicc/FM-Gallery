gsap.registerPlugin(ScrollTrigger);

const createScrollAnimation = (start, end) => {
  // ---------  Section 1 ---------
  gsap.fromTo('.desc-1',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '.desc-1',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: start,
        end: end,
      },
      ease: 'none',
      duration: 3,
    }
  );
  // --------- Section 2 ---------
  gsap.fromTo('.desc-2',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '.desc-2',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: start,
        end: end,
      },
      ease: 'none',
      duration: 3,
    }
  );
  gsap.fromTo('.desc-3',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '.desc-3',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: start,
        end: end,
      },
      ease: 'none',
      duration: 3,
    }
  );
};

ScrollTrigger.matchMedia({

  "(min-width: 800px)": function () {
    createScrollAnimation('top 40%', 'bottom 40%');
  },

  "(max-width: 799px)": function () {
    createScrollAnimation('top 90%', 'bottom 90%');
  },
});
