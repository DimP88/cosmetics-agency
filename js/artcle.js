document.addEventListener("DOMContentLoaded", () => {
  const description = document.querySelector(".service__description");
  let hasAnimated = false; // Флаг для отслеживания состояния анимации

  // Функция для обработки анимации
  const handleAnimation = (isIntersecting) => {
    if (isIntersecting) {
      description.classList.add("active");
      hasAnimated = true;
    } else if (hasAnimated) {
      description.classList.remove("active");
    }
  };

  // Анимация только для десктопа
  if (window.matchMedia("(min-width: 1200px)").matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          handleAnimation(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(description);

    // Дополнительно обрабатываем скролл для плавности
    window.addEventListener("scroll", () => {
      const rect = description.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      handleAnimation(isVisible);
    });
  } else {
    // На мобильных сразу показываем контент
    description.style.opacity = "1";
    description.style.transform = "none";
  }
});
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
