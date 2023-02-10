function inversionBanco(){

    var capital = document.getElementById("capital").value;

    var meses = document.getElementById("meses").value;

    var porcentaje = 0.02;

    var ganancia = (capital*porcentaje) * meses;

    alert("Su ganancia ganada a traves de " + meses + " meses es de $" + ganancia);

}





function calculoSueldo(){

    var sueldo = document.getElementById("sueldo").value;

    var ventas = document.getElementById("ventas").value;

    var porcentajeComision = ventas/10;

    var comision = porcentajeComision * sueldo;

    
    var sueldoycomision = ((sueldo/10)*10) + comision;

    alert("Su sueldo base es de $" + sueldo + ", hizo " + ventas + " ventas, por lo que su comision obtenida es de $" + comision + ", teniendo asi un sueldo de $" + sueldoycomision + " para este mes");



}



function compraDescuento(){

    var compra = document.getElementById("compra").value;

    precioFinal = compra * 0.85;

    alert("El precio final de su compra de $" + compra + " es de $" + precioFinal);

}




function calificacionFinal(){

    var calificacionParcial = document.getElementById("calificacionParcial").value;

    var examenFinal = document.getElementById("examenFinal").value;

    var trabajoFinal = document.getElementById("trabajoFinal").value;


    var promCalifPar = calificacionParcial * 0.55;

    var promExamFin = examenFinal * 0.30;

    var promTrabjFin = trabajoFinal *  0.15;

    var promedioFinal = ((promCalifPar/10)*10) + promExamFin + promTrabjFin;

    alert("Su calificacion final es de " + promedioFinal);

}


function promedioEstudiantes(){

    var estudianteM = document.getElementById("estudianteM").value;

    var estudianteF = document.getElementById("estudianteF").value;

    var estudianteFF = estudianteF * 1;

    var a = ((estudianteM/10)*10) + estudianteFF;

    var porcentajeM = (estudianteM * 100) / a;

    var porcentajeF = 100 - porcentajeM;

    alert("Hay " + porcentajeM + "% estudiantes masculinos y " + porcentajeF + "% estudiantes femeninos");

    

}



function algoritmoParaCalcularEdad(){

    var edad = document.getElementById("edad").value;

    var edadd = ((edad/10)*10) + 5;
    
    alert("Felicidades :0 su edad es de " + edadd + " años!!");


}


function calculoNumeros(){

    var number1 = document.getElementById("number1").value;

    var number2 = document.getElementById("number2").value;

    var number3 = 0;



    if(number1 >= number2){

        if(number1 == number2){


            number3 = ((number1/10)*10) * ((number2/10)*10); 

            alert("Ambos numereos son iguales, por lo tanto se multiplican y da como resultado: " + number3);

        } else{

            number3 = ((number1/10)*10) - ((number2/10)*10); 

            alert("El primer numero es mayor que el segundo, por lo tanto se restan y da como resultado: " + number3);




        }



    }else{

        number3 = ((number1/10)*10) + ((number2/10)*10); 

        alert("El primer numero es menor que el segundo, por lo tanto se suman y da como resultado: " + number3);


    }



}



function numeroMayor(){

    var number1 = document.getElementById("number1").value;

    var number2 = document.getElementById("number2").value;

    var number3 = document.getElementById("number3").value;


    var number11 = ((number1/10)*10);

    var number22 = ((number2/10)*10);

    var number33 = ((number3/10)*10);

    if(number11 >= number22){

        if(number11 >= number33){

            alert("El numero mayor de los tres es " + number11);


        } else{

            alert("El numero mayor de los tres es " + number33);

        }


    } else{

        if(number22 >= number33){

            alert("El numero mayor de los tres es " + number22);


        } else{

            alert("El numero mayor de los tres es " + number33);

        }


    }




}


function horasExtra(){

    var hora = document.getElementById("horas").value;

    var horas = ((hora/10)*10);

    var precio = 120;

    var salario = 0;



    if(horas <= 40){

        salario = horas * precio;

        alert("No trabajaste horas extra, tu salario de la quincena es de: " + salario);

    }

    if(horas > 40 && horas < 49){

        salario = (((horas - 40) * 120) * 2) + (40 * 120);

        alert("Trabajaste horas extra, tu salario de la quincena es de: " + salario);

    }

    if(horas > 48){

        salario = (40 * 120) + (8 * 240) + ((horas - 48) * 360);

        alert("Trabajaste horas extra, tu salario de la quincena es de: " + salario);


    }






}


function repartoUtilidades(){

    var mese = document.getElementById("meses").value;

    var salari = document.getElementById("salario").value;



    var meses = ((mese/10)*10);

    var salario = ((salari/10)*10);

    var utilidad = 0;

    if(meses < 12){

        utilidad = salario * 0.05;

        alert("La utilidad recibida en base a su antiguedad es de: " + utilidad);


    }


    if(meses >= 12 && meses < 24){

        utilidad = salario * 0.07;

        alert("La utilidad recibida en base a su antiguedad es de: " + utilidad);


    }


    if(meses >= 24 && meses < 59){

        utilidad = salario * 0.10;

        alert("La utilidad recibida en base a su antiguedad es de: " + utilidad);


    }

    if(meses >= 60 && meses < 119){

        utilidad = salario * 0.15;

        alert("La utilidad recibida en base a su antiguedad es de: " + utilidad);


    }


    if(meses >= 120){

        utilidad = salario * 0.20;

        alert("La utilidad recibida en base a su antiguedad es de: " + utilidad);


    }


}