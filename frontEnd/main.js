// validação do login,para ser enviado para a pagina de request de material.
let submit = document.querySelector(".btn")
submit.addEventListener("click" , (e)=>{
    e.preventDefault()
  const id = document.querySelector("#matricula").value
  const pin = document.querySelector("#pin").value
  if(id.length === 4 && pin.length > 8){
     window.location.href = "request.html"
  }else{
    alert("esta faltando dados para ser preenchido")
  }
})