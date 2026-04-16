document.addEventListener("DOMContentLoaded", () => {
  // 点击标题返回顶部
  const headerTitle = document.querySelector("header h1");
  headerTitle.style.cursor = "pointer";
  headerTitle.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 页面淡入动画
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease-in";
    document.body.style.opacity = "1";
  }, 50);
});
