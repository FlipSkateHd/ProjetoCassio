

const readline = require('readline').createInterface({  // Apliacação para leitura do terminal
   input: process.stdin,
   output: process.stdout
});

var assentos = {   // Lista de Assentos (true é livre e false é ocupado)
   "A1" : true,
   "A2" : true,
   "A3" : true,
   //corredor
   "A4" : false, 
   "A5" : true,
   "A6" : false,

   "B1" : true,
   "B2" : false,
   "B3" : true,
   //corredor
   "B4" : true, 
   "B5" : false,
   "B6" : true,
   
   "C1" : true,
   "C2" : false,
   "C3" : true,
   //corredor
   "C4" : false, 
   "C5" : false,
   "C6" : true,
}

function exibirAssentos(){
   for (let key in assentos) {      // Exibindo a lista de assentos 
   if (assentos[key] === true) {
      console.log("O assento " + key + " está vazio");
   } else {
      console.log("O assento " + key + " está ocupado");
   }
   
} 
}

function calcularPorcentagemAssentosLivres() {
   let totalAssentos = Object.keys(assentos).length;
   let assentosLivres = Object.values(assentos).filter(estado => estado === true).length;
   let porcentagemAssentosLivres = (assentosLivres / totalAssentos) * 100;
   console.log(`A porcentagem de assentos livres é: ${porcentagemAssentosLivres.toFixed(2)}%`);
}


function pergunta() {  // Obtendo escolha do usuário e tentando reserva 
   readline.question("Qual assento deseja escolher?\n", function(resposta) {
      var assento = resposta.toUpperCase(); // Converter para maiúsculas
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

function reservarAssento(assento) {  // Função de reserva
   if (assentos[assento] === true) { // Verificar se o assento está vazio
      assentos[assento] = false; // Reservar o assento tornando-o ocupado
      console.log("Assento " + assento + " reservado com sucesso.");
   } else {
      console.log("O assento " + assento + " já está ocupado, tente novamente.");
   }
   calcularPorcentagemAssentosLivres(); // Após cada reserva, calcular a porcentagem de assentos livres
}

exibirAssentos()
calcularPorcentagemAssentosLivres()
pergunta()

