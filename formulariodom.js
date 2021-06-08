//TEMPORIZADOR
var temps;
var s=0;


function empezar(){

    temps = setInterval(function() { tiempo() }, 1000);
}

function tiempo(){

    s++;
    document.getElementById("pasotiempo").innerHTML= 'Tiempo transcurrido '+s;
    numer = document.getElementById('pasotiempo');
    numer.style.marginLeft='80%';
    

    if (s >= 100) {
        
        document.getElementById("frase").innerHTML="Los he visto de más rápidos";
        crono = document.getElementById('frase');
        crono.style.color= "#cb3234";
        crono.style.marginLeft="80%";
        detener();
    }
}

function detener() {

    clearInterval(temps);
}

//VALIDAR NOMBRE

function validarNombre(value){

    if (value.length==0) {
        
        document.getElementById("par1").innerHTML="*Es obligatorio rellenar el campo del nombre";
        
        par1 = document.getElementById('par1');
        par1.style.color= "#cb3234";
        par1.style.display = "inline";
        par1.style.marginLeft = "20px";

        caja1 = document.getElementById('nom');
        caja1.style.backgroundColor="#cb323460";

        return false;
    }

    else {
        caja1 = document.getElementById('nom');
        caja1.style.backgroundColor="#ffffff"

        return true;
    }

    if (value.length>0) {

        document.getElementById("par1").innerHTML="";

        return true;
    }
}

//VALIDAR CORREO

function validarmail(value){

    var posArroba = value.indexOf("@");
    var posPunt = value.indexOf(".",posArroba);
                    
        if (posArroba<0 || posPunt<0){
        
            document.getElementById("par2").innerHTML= "*"+value+' no es un mail correcto';

            
            par2.style.color= "#cb3234";
            par2.style.display = "inline";
            par2.style.marginLeft = "20px";

            caja2 = document.getElementById('correo');
            caja2.style.backgroundColor="#cb323460";

            return false;
       
        }

        else {
            caja2 = document.getElementById('correo');
            caja2.style.backgroundColor="#ffffff"

            return true;
        }
    
        if (value != false) {
    
            document.getElementById("par2").innerHTML="";
            
            return true;
        }
}

//CONTAR CARACTERES

function comentarios(value) {

    if (value.length >= 250) {

        document.getElementById('par3').innerHTML='*No puedes superar los 250 caracteres';

        par3 = document.getElementById('par3');
        par3.style.color= "#cb3234";
        par3.style.display = "inline";
        par3.style.marginLeft = "20px";

    }

    for (i=0; i<value.length; i++) {

        document.getElementById('contador').innerHTML= (i+1) + ' caracteres';  
    }
    
    if (value.length==0) {

        document.getElementById('contador').innerHTML = '0 caracteres';
    }
}

//PROFESION

window.onload = function() {

    empezar();
    
    document.querySelector("#profesion").onchange = function (e) {

        elige = document.getElementById('profesion').value;


        if (elige==2){ //2 = Programador

            document.getElementById('par4').innerHTML = '*Has elegido una buena opción de futuro!!'; 
        }
        else if ((elige==1) || (elige==3)) {

            document.getElementById('par4').innerHTML = '*No esta mal, pero programador mola más';    
        }

        else {

            document.getElementById('par4').innerHTML = '*Tienes que elegir una profesion'
        }

        par4 = document.getElementById('par4');
        par4.style.color= "#cb3234";
        par4.style.display = "inline";
        par4.style.marginLeft = "20px";    
    }
}

//BORRAR FORMULARI

function borrar() {

    var opcion = confirm("Seguro que quieres eliminar los datos del formulario?");
    
    if (opcion == true) {

    document.getElementById('par1').innerHTML = '';
    document.getElementById('par2').innerHTML = '';
    document.getElementById('par3').innerHTML = '';
    document.getElementById('par4').innerHTML = '';

    caja1 = document.getElementById('nom');
    caja1.style.backgroundColor="#ffffff";
    caja2 = document.getElementById('correo');
    caja2.style.backgroundColor="#ffffff";

    }

    else {
        return false;
    }
}

//VALIDACION GLOBAL

function validartotal(){

    var resul1 = validarNombre(document.getElementById("nom").value);
    var resul2 = validarmail(document.getElementById("correo").value);

    if ((resul1==true) && (resul2==true)) {

        detener();
        document.getElementById("frase").innerHTML="Muy bien crack!!";
        crono2 = document.getElementById('frase');
        crono2.style.color= "#cb3234";
        crono2.style.marginLeft="80%";

        return true;
    }

    else { 
        
        return false;
    }
  
}
