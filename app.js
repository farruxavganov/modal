const openBtn = document.querySelector(".banner__btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__btn");


openBtn.addEventListener("click", function () {
	modal.classList.add("show");
})

closeBtn.addEventListener("click", function () {
	modal.classList.remove("show");
})