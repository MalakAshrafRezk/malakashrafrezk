document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animate");
  const projects = document.querySelectorAll(".project-card");
  const links = document.querySelectorAll("a");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("fade-in");
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.1});
  sections.forEach(section => observer.observe(section));

  const backToTop = document.createElement("button");
  backToTop.innerHTML = "&#8679;";
  backToTop.id = "backToTop";
  Object.assign(backToTop.style, {
    position:"fixed", bottom:"25px", right:"25px",
    width:"50px", height:"50px", border:"none", borderRadius:"50%",
    background:"#2563eb", color:"#fff", fontSize:"26px", cursor:"pointer",
    display:"none", zIndex:"999", boxShadow:"0 6px 20px rgba(0,0,0,0.3)",
    transition:"transform 0.3s, background-color 0.3s"
  });
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  backToTop.addEventListener("mouseenter",()=>backToTop.style.backgroundColor="#1e40af");
  backToTop.addEventListener("mouseleave",()=>backToTop.style.backgroundColor="#2563eb");

  window.addEventListener("scroll",()=>{
    backToTop.style.display = window.scrollY>300?"block":"none";
    document.querySelector(".hero").style.boxShadow = window.scrollY>50?"0 8px 25px rgba(0,0,0,0.2)":"none";
  });

  projects.forEach(project=>{
    project.addEventListener("mouseenter",()=>{
      project.style.transform="translateY(-8px) rotateZ(-1deg)";
      project.style.boxShadow="0 10px 25px rgba(0,0,0,0.15)";
      project.style.background="linear-gradient(135deg,#bfdbfe,#e0f2fe)";
    });
    project.addEventListener("mouseleave",()=>{
      project.style.transform="translateY(0) rotateZ(0)";
      project.style.boxShadow="0 4px 12px rgba(0,0,0,0.05)";
      project.style.background="#f0
