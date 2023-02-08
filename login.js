function login(){

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;

    if(user == "harold" && password == "1234"){

        alert("Inicio de sesion correcto")

    }else{

        alert("Error en el inicio de sesion")

    }


}