// O projeto deve conter as funções de checar se o assento está ocupado, senão fazer uma reserva e mostrar a porcentagem de assentos livres
const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

var assentos = {
   "A1" : true,
   "A2" : true,
   "A3" : true,
   //corredor
   "A4" : false, 
   "A5" : true,
   "A6" : true,

}

for (let key in assentos) {
   if (assentos[key] === true) {
      console.log("O assento " + key + " está vazio");
   } else {
      console.log("O assento " + key + " está ocupado");
   }
} //


function pergunta() {
   readline.question("Qual assento deseja escolher?\n", function(resposta) {
      var assento = resposta.toUpperCase(); // Converter para maiúsculas para garantir correspondência com as chaves
      if (assentos[assento] !== undefined) { // Verificar se o assento existe
         console.log("Você escolheu o assento " + assento);
         reservarAssento(assento);
      } else {
         console.log("Assento inválido, tente novamente.");
         pergunta(); // Chamar novamente a função pergunta se o assento for inválido
      }
      readline.close();
   });
   
}




function reservarAssento(assento) {
   if (assentos[assento] === true) { // Verificar se o assento está vazio
      assentos[assento] = false; // Reservar o assento tornando-o ocupado
      console.log("Assento " + assento + " reservado com sucesso.");
   } else {
      console.log("O assento " + assento + " já está ocupado, tente novamente.");
   }
}

pergunta()

