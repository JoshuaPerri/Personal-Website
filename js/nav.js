document.getElementById("nav-grow").addEventListener("click", (e) => {
  var navWindow = document.getElementById("nav-window");
  var navGrow = document.getElementById("nav-grow");
  if (!navWindow.classList.contains("open")) {
    navWindow.classList.add("open");
    navGrow.classList.add("open");
    navGrow.textContent = "<";
  } else {
    navWindow.classList.remove("open");
    navGrow.classList.remove("open");
    navGrow.textContent = ">";
  }
});
