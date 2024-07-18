//validação dos dados cadastrados 
const submitToo = document.querySelector(".btn1")
submitToo.addEventListener("click" , (e)=>{

  e.preventDefault()
  let registration = document.querySelector("#mat").value
 let password = document.querySelector("#pin").value 

 if(registration.length > 5 || registration === "" ){  alert("Matricula e invalida ")} 
 if(password.length < 8){ alert("senha e invalida.")}
 
 let id = document.querySelector("#id").value
 let mail = document.querySelector("#email").value

 if(id === "" || mail ===""){
    alert("Confira seus dados pois a algo errado.")
 }else{ 
    window.location.href = 'index.html'
 }
})
