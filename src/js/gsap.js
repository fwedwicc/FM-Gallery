gsap.registerPlugin(ScrollTrigger);

const createScrollAnimation = (start, end) => {
  // ---------  Navigation bar ---------
  gsap.to('.nav-left',
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '.nav-left',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 5%',
        end: 'bottom -10%',
      },
      ease: 'none',
      x: -100,
      duration: 3,
    }
  );
  gsap.to('.nav-right',
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '.nav-right',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 5%',
        end: 'bottom -10%',
      },
      ease: 'none',
      x: 100,
      duration: 3,
    }
  );
  // --------- // Navigation bar ---------
  // ---------  Heading ---------
  gsap.fromTo('.heading',
    {
      opacity: 1,
      scale: 1 // Start with default size
    }, // from
    { // to
      opacity: 0,
      scale: 0.8, // End with smaller size
      scrollTrigger: {
        trigger: '.heading',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 30%',
        end: 'bottom 10%',
      },
      ease: 'none',
      duration: 3,
    }
  );
  // --------- // Heading ---------
  // ---------  Section 1 ---------
  gsap.fromTo('#img-1',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-1',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 50%',
        end: 'bottom 90%',
      },
      ease: 'none',
      duration: 3,
    }
  );
  gsap.fromTo('#desc-1',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-1',
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
  // --------- // Section 1 ---------
  // --------- Section 2 ---------
  gsap.fromTo('#img-2',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-2',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 50%',
        end: 'bottom 90%',
      },
      ease: 'none',
      duration: 3,
    }
  );
  gsap.fromTo('#desc-2',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-2',
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
  // --------- // Section 2 ---------
  // --------- Section 3 ---------
  gsap.fromTo('#img-3',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-3',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 50%',
        end: 'bottom 90%',
      },
      ease: 'none',
      duration: 3,
    }
  );
  gsap.fromTo('#desc-3',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-3',
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
  // --------- // Section 3 ---------
  // --------- Section 4 ---------
  gsap.fromTo('#img-4',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-4',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 50%',
        end: 'bottom 90%',
      },
      ease: 'none',
      duration: 3,
    }
  );
  gsap.fromTo('#desc-4',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-4',
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
  // --------- // Section 4 ---------
};

ScrollTrigger.matchMedia({

  "(min-width: 800px)": function () {
    createScrollAnimation('top 40%', 'bottom 40%');
  },

  "(max-width: 799px)": function () {
    createScrollAnimation('top 90%', 'bottom 90%');
  },
});
