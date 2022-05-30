const form = document.getElementById("contato")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log(event)
  console.log(event.target.elements["nome"].value)
  console.log(event.target.elements["email"].value)
  console.log(event.target.elements["mensagem"].value) 

})


