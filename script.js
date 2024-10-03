const content = document.getElementById("content");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden", "red");
    content.style.color = "green"; // Change color to green
  } else {
    content.classList.add("hidden", "red");
    content.style.color = "red"; // Change color to red
  }
});
