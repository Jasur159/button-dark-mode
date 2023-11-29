const darkLightBtn = document.querySelector(".btn");
const btnBox = document.querySelector(".Button_box");
const body = document.querySelector("body");
darkLightBtn.addEventListener("click", () => {
  darkLightBtn.classList.toggle("active");
  btnBox.classList.toggle("active");
  if (body.className.includes("light_theme")) {
    body.classList.remove("light_theme");
    body.classList.add("dark_theme");
  } else {
    body.classList.remove("dark_theme");
    body.classList.add("light_theme");
  }
});
