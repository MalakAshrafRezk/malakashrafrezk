// Typewriter effect
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

// Scroll animations
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries,obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
      obs.unobserve(entry.target);
    }
  });
},{threshold:0.1});
sections.forEach(sec=>observer.observe(sec));

// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
  backToTop.style.display = window.scrollY>300?"block":"none";
});
backToTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
