document.querySelectorAll(".option-item").forEach((item) => {
  const button = item.querySelector(".btn-options");

  button.addEventListener("click", function () {
    item.classList.toggle("active-option-item");
    this.classList.toggle("active-btn-options");

    this.textContent = this.classList.contains("active-btn-options")
      ? "-"
      : "+";
  });
});
