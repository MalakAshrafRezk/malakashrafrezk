document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animate");
  const projects = document.querySelectorAll(".project");
  const links = document.querySelectorAll("a");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  const backToTop = document.createElement("button");
  backToTop.innerHTML = "&#8679;";
  backToTop.id = "backToTop";
  document.body.appendChild(backToTop);

  Object.assign(backToTop.style, {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "26px",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    display: "none",
    zIndex: "999",
    transition: "transform 0.3s ease, background-color 0.3s ease"
  });

  backToTop.addEventListener("mouseenter", () => backToTop.style.backgroundColor = "#1e40af");
  backToTop.addEventListener("mouseleave", () => backToTop.style.backgroundColor = "#2563eb");
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    const hero = document.querySelector(".hero");
    hero.style.boxShadow = window.scrollY > 50 ? "0 8px 25px rgba(0,0,0,0.2)" : "none";
  });

  projects.forEach(project => {
    project.style.transition = "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease";

    project.addEventListener("mouseenter", () => {
      project.style.transform = "translateY(-8px) rotateZ(-1deg)";
      project.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      project.style.backgroundColor = "#e0f2fe";
    });

    project.addEventListener("mouseleave", () => {
      project.style.transform = "translateY(0) rotateZ(0)";
      project.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      project.style.backgroundColor = "#f0f9ff";
    });
  });

  links.forEach(link => {
    link.style.transition = "transform 0.2s ease, color 0.2s ease";

    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.1) translateY(-2px)";
      link.style.color = "#1e40af";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1) translateY(0)";
      link.style.color = "#2563eb";
    });
  });
});
