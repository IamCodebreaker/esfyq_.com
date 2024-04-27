document.addEventListener(
  "DOMContentLoaded",
  function () {
    new SweetScroll({}),
      particlesJS("particles-js", {
        particles: {
          number: { value: 75, density: { enable: !0, value_area: 800 } },
          color: { value: "#000000" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
          },
          size: {
            value: 5,
            random: !0,
            anim: {
              enable: !1,
              speed: 19.18081918081918,
              size_min: 0.1,
              sync: !1,
            },
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: !0,
            speed: 2,
            direction: "center",
            random: !0,
            straight: !1,
            out_mode: "in",
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 },
          },
          nb: 80,
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !1, mode: "grab" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: !0,
      });
  },
  !1,
);

window.transitionToPage = function (href) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;
});
