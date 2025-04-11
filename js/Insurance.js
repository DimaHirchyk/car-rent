document.querySelectorAll(".card-insurance").forEach((item) => {
  item.addEventListener("click", function () {
    if (this.classList.contains("active-card-insurance")) return;

    document.querySelectorAll(".card-insurance").forEach((el) => {
      el.classList.remove("active-card-insurance");
    });

    this.classList.add("active-card-insurance");
  });
});
