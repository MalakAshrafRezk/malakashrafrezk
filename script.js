// ===== Typewriter Effect for Hero Name =====
const typeText = "Malak Ashraf";
let i = 0;
function typeWriter() {
  if(i < typeText.length){
    document.getElementById("typewriter").innerHTML += typeText.charAt(i);
    i++;
    setTimeout(typeWriter,150);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

// ===== Scroll Animations for Sections =====
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
      obs.unobserve(entry.target);
    }
  });
},{threshold:0.1});
sections.forEach(sec => observer.observe(sec));

// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});

// ===== Project Cards Hover 3D Effect =====
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card=>{
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = x - cx;
    const dy = y - cy;
    card.style.transform = `perspective(600px) rotateY(${dx/15}deg) rotateX(${-dy/15}deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
  });
});

// ===== Buttons Hover Glow Effect =====
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 10px 20px rgba(147,51,234,0.5)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});
