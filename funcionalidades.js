//ejercicio 1 //

function func_ej1 (){

    let ej1_c1 = parseFloat (document.getElementById("ej1_c1").value);
    let ej1_c2 = parseFloat (document.getElementById("ej1_c2").value);
    let ej1_c3 = parseFloat (document.getElementById("ej1_c3").value);


    let ej1_suma = ej1_c1 + ej1_c2 + ej1_c3

    document.getElementById("ej1_resultado").value = ej1_suma

}

//ejercicio 2 //


function func_ej2 (){

    let ej2_n1 = parseFloat (document.getElementById("ej2_n1").value);
    let ej2_n2 = parseFloat (document.getElementById("ej2_n2").value);

    let ej2_result = ej2_n1 + ej2_n2 

    document.getElementById("ej2_result").value = ej2_result

}

//ejercico 3 //

function func_ej3() {
    let ej3_suma = 0
    for (let index = 0; index <= 100; index++) {
        ej3_suma += index;  
    }
    alert(ej3_suma)
}

//ejercico 4 //

