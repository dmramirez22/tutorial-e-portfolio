document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const top = target.offsetTop;

    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  });
});