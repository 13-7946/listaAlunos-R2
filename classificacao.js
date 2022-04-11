let listaAlunos = ["anderson", "robson","rafael", "raiane", "leonardo"]

let quantidadeAlunos = 5;

for (let contador = 0; contador < listaAlunos.length; contador++) {

    // contador % 2 == -> par
    // contador % 2 == -> impar

if (contador == 0 ) {
    console.log (`o aluno ${listaAlunos[contador]} é o numero zero`)
} else if (contador % 2 == 0 ) {
    //concatenação -> junçao de texto -> operador : +

    console.log(listaAlunos[contador] + " é número par")
}  else if (contador % 2 == 1) {

    // interpolaçao -> formata um texto inserindo valores dentro

    console.log(`O aluno ${listaAlunos[contador]} É número impar`)
}


}
