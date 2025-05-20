document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".article");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 200 * index);
        } else {
          setTimeout(() => {
            entry.target.classList.remove("visible");
          }, 200 * index);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  articles.forEach((article) => {
    observer.observe(article);
  });
});
