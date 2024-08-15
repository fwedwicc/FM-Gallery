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
  gsap.to('.heading',
    {
      scrollTrigger: {
        trigger: '.heading',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top 40%',
        end: 'bottom 25%',
      },
      ease: 'none',
      y: 600,
      duration: 1,
    }
  );
  gsap.fromTo('#heading-bg',
    {
      scale: 1
    },
    {
      scale: 1.3,
      scrollTrigger: {
        trigger: '#heading-bg',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top -10%',
        end: 'bottom 5%',
      },
      ease: 'none',
      duration: 1,
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
  // --------- Section 5 ---------
  gsap.fromTo('#img-5',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-5',
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
  gsap.fromTo('#desc-5',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-5',
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
  // --------- // Section 5 ---------
  // --------- Section 6 ---------
  gsap.fromTo('#img-6',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-6',
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
  gsap.fromTo('#desc-6',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-6',
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
  // --------- // Section 6 ---------
  // --------- Section 7 ---------
  gsap.fromTo('#img-7',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-7',
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
  gsap.fromTo('#desc-7',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-7',
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
  // --------- // Section 7 ---------
  // --------- Section 8 ---------
  gsap.fromTo('#img-8',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-8',
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
  gsap.fromTo('#desc-8',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-8',
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
  // --------- // Section 8 ---------
  // --------- Section 9 ---------
  gsap.fromTo('#img-9',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-9',
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
  gsap.fromTo('#desc-9',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-9',
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
  // --------- // Section 9 ---------
  // --------- Section 10 ---------
  gsap.fromTo('#img-10',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-10',
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
  gsap.fromTo('#desc-10',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-10',
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
  // --------- // Section 10 ---------
  // --------- Section 11 ---------
  gsap.fromTo('#img-11',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-11',
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
  gsap.fromTo('#desc-11',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-11',
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
  // --------- // Section 11 ---------
  // --------- Section 12 ---------
  gsap.fromTo('#img-12',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-12',
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
  gsap.fromTo('#desc-12',
    { opacity: 0 }, // from
    { // to
      opacity: 1,
      scrollTrigger: {
        trigger: '#desc-12',
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
  // --------- // Section 12 ---------


  gsap.fromTo('#img-set-1',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-1',
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
  gsap.fromTo('#img-set-2',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-2',
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
  gsap.fromTo('#img-set-3',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-3',
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
  gsap.fromTo('#img-set-4',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-4',
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
  gsap.fromTo('#img-set-5',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-5',
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
  gsap.fromTo('#img-set-6',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-6',
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
  gsap.fromTo('#img-set-5',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-5',
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
  gsap.fromTo('#img-set-6',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-6',
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
  gsap.fromTo('#img-set-7',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-7',
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
  gsap.fromTo('#img-set-8',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-8',
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
  gsap.fromTo('#img-set-9',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-9',
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
  gsap.fromTo('#img-set-10',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-10',
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
  gsap.fromTo('#img-set-11',
    {
      opacity: 0,
      scale: 0.9 // Start with default size
    }, // from
    { // to
      opacity: 1,
      scale: 1, // End with smaller size
      scrollTrigger: {
        trigger: '#img-set-11',
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
};

ScrollTrigger.matchMedia({

  "(min-width: 800px)": function () {
    createScrollAnimation('top 40%', 'bottom 40%');
  },

  "(max-width: 799px)": function () {
    createScrollAnimation('top 90%', 'bottom 90%');
  },
});
