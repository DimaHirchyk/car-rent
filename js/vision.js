document
  .querySelector(".product-page")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-booking")) {
      this.classList.add("no-vision");

      document
        .querySelector(".container.product-page")
        .classList.remove("product-page");

      document
        .querySelector(".container.progress")
        .classList.remove("no-vision");
      document
        .querySelector(".container.options")
        .classList.remove("no-vision");
    }
  });

document.querySelector(".options").addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-continue")) {
    this.classList.add("no-vision");

    document
      .querySelector(".container.insurance")
      .classList.remove("no-vision");
  }
});

document
  .querySelector(".insurance")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-continue")) {
      this.classList.add("no-vision");

      document.querySelector(".container.forms").classList.remove("no-vision");
    }
  });
