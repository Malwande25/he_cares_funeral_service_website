const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text = `Hello He-Cares Funeral Services.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/27715177592?text=${text}`, "_blank", "noopener");
});
