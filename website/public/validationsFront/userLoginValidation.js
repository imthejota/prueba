window.addEventListener("load", function () {
    
    let formulario = document.querySelector("form.caja2");
    
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let errores = [];

        let campoEmail = document.querySelector("#correo");
        if (campoEmail.value == "" || !campoEmail.value.includes('@')){
            errores.push("Email obligatorio")
        }
    
        let campoContrasena = document.querySelector("#contraseña");
        if (campoContrasena.value == "") {
            errores.push("Contraseña obligatoria")
        } 
        
        console.log(errores)
        
        if (errores.length > 0) {
            let ulErrores = document.querySelector("ul.ul-login-errores")
            ulErrores.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "<li/>"
            }
        } else {
            formulario.submit()
        }
    })
})
