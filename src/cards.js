import VanillaTilt from "vanilla-tilt";

VanillaTilt.init(document.querySelectorAll(".card-tilt"), {
  max: 5,
  speed: 250,
  glare: true,
  "max-glare": 0.5
});

