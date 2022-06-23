function checar(){
    let numero = document.getElementById("numero").value;
    let arrayNumero = numero.split("");
    
    
    if (arrayNumero[0] % 2 == 0) {
        document.getElementById("resultado").innerHTML = "O dígito da centena do número acima é par."; 
    }
    else {
        document.getElementById("resultado").innerHTML = "O dígito da centena do número acima é impar.";
    }
}