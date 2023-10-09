const button = document.getElementById("button_github");

function handleclick(e) {
  e.preventDefault();
  console.log("Ha sido clikeado");
}

button.addEventListener("click", handleclick);
