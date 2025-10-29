// 👉 Scroll animation to reveal sections
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// 👉 Lightbox with navigation
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".project-gallery img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

const show = (i) => {
  index = i;
  lightboxImg.src = images[i].src;
  lightbox.style.display = "flex";
};

images.forEach((img, i) => img.onclick = () => show(i));

lightbox.onclick = (e) => {
  if (e.target === lightbox || e.target === lightboxImg) lightbox.style.display = "none";
};

prev.onclick = (e) => {
  e.stopPropagation();
  show((index - 1 + images.length) % images.length);
};

next.onclick = (e) => {
  e.stopPropagation();
  show((index + 1) % images.length);
};

document.onkeydown = (e) => {
  if (e.key === "Escape") lightbox.style.display = "none";
};
// 🌗 Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  // Optional: Change icon
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
