document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animate");//sc
  const projects = document.querySelectorAll(".project");
  const links = document.querySelectorAll("a");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach((section) => observer.observe(section));

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
    width: "45px",
    height: "45px",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "none",
    zIndex: "999"
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    const hero = document.querySelector(".hero");
    hero.style.boxShadow = window.scrollY > 50 ? "0 6px 20px rgba(0,0,0,0.1)" : "none";
  });

  projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
      project.style.transform = "translateY(-5px)";
      project.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
    });
    project.addEventListener("mouseleave", () => {
      project.style.transform = "translateY(0)";
      project.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
    });
  });

  links.forEach(link => {
    link.addEventListener("mouseenter", () => link.style.transform = "translateY(-2px)");
    link.addEventListener("mouseleave", () => link.style.transform = "translateY(0)");
  });
});
