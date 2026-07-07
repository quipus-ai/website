(function () {
  const cards = document.querySelectorAll(".hero-product");

  if (!cards.length) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !window.gsap) {
    cards.forEach((card) => {
      card.style.opacity = "";
      card.style.transform = "";
      card.style.visibility = "";
      card.style.willChange = "";
    });
    return;
  }

  const timeline = gsap.timeline({
    delay: 0.14,
    defaults: {
      duration: 0.72,
      ease: "power3.out",
    },
    onComplete: () => {
      cards.forEach((card) => {
        card.style.willChange = "";
      });
    },
  });

  gsap.set(cards, {
    transformOrigin: "50% 70%",
    willChange: "transform, opacity",
  });

  timeline.from(cards, {
    autoAlpha: 0,
    y: 26,
    scale: 0.975,
    stagger: {
      each: 0.1,
      from: "start",
    },
    clearProps: "opacity,visibility,transform",
  });
})();
