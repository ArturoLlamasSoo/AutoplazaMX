validar=function() {
    var usuario = document.getElementById('login__username')
    var pass = document.getElementById('login__password')
    if(usuario.value=="Admin" && pass.value=="6121824") {
        location.href ="CASA.html";
        }
         else {
          alert("Contraseña Incorrecta.")
        }
      }