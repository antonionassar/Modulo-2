function calcular(){
    document.getElementById("resultado").innerHTML = ""; 

    let numero = document.getElementById("numero").value;
    let grupo = numero.split("");
    let soma = 0;

    for (let i = 0; i < grupo.length; i++) {
        if (Number(grupo[i]) >= 0 && Number(grupo[i]) <= 9) {
            soma += Number(grupo[i]); 
        }
    }
    document.getElementById("resultado").innerHTML +="Soma dos dígitos = " + soma;
}