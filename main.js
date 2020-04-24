document.getElementById("message").addEventListener("keyup", () => {
  document.getElementById("one").textContent = event.target.value;
  document.getElementById("two").textContent = event.target.value
});


// MORE DYNAMIC WAY

/*

document.querySelector("#message").addEventListener("keyup", () => {
  
  let boxes = document.querySelectorAll(".article--box")

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = event.target.value
  }  
}); 

*/