document.getElementById("message").addEventListener("keyup", () => {
  document.getElementById("one").textContent = event.target.value;
  document.getElementById("two").textContent = event.target.value
})
