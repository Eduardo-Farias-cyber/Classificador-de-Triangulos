function descobrirTriangulo(){
    let lado1 = document.getElementById("lado_1");
    let valorLado1 = Number(lado1.value);
    let lado2 = document.getElementById("lado_2");
    let valorLado2 = Number(lado2.value);
    let lado3 = document.getElementById("lado_3");
    let valorLado3 = Number(lado3.value);

    if (valorLado1 + valorLado2 > valorLado3 &&
        valorLado2 + valorLado3 > valorLado1 &&
        valorLado3 + valorLado1 > valorLado2) {

        if (valorLado1 == valorLado2 && valorLado2 == valorLado3) {
            document.getElementById("OutPut").innerHTML = "Triângulo Equilátero";
        }
        else if (valorLado1 == valorLado2 && valorLado1 != valorLado3 ||
                 valorLado2 == valorLado3 && valorLado2 != valorLado1 ||
                 valorLado3 == valorLado1 && valorLado3 != valorLado2) {
            document.getElementById("OutPut").innerHTML = "Triângulo Isósceles";
        }
        else if (valorLado1 != valorLado2 && valorLado2 != valorLado3 && valorLado3 != valorLado1) {
            document.getElementById("OutPut").innerHTML = "Triângulo Escaleno";
        }
    }
    else {
        document.getElementById("OutPut").innerHTML = "Não é um triângulo";
    }
}