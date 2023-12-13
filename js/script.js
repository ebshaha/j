const coisas = [
   "Eu ❤️ sua voz.",
   "Eu ❤️ seu cabelo.",
   "Eu ❤️ seus olhos.",
   "Eu ❤️ seu sorriso.",
   "Eu ❤️ seu cheiro.",
   "Eu ❤️ como você anda.",
   "Eu ❤️ como você se expressa.",
   "Eu ❤️ sua personalidade.",
   "Eu ❤️ seu senso de humor.",
   "Eu ❤️ sua gentileza.",
   "Eu ❤️ sua inteligência.",
   "Eu ❤️ sua presença.",
   "Eu ❤️ seu estilo único.",
   "Eu ❤️ sua determinação.",
   "Eu ❤️ sua empatia.",
   "Eu ❤️ sua criatividade.",
   "Eu ❤️ como você ilumina meu dia.",
   "Eu ❤️ sua paciência.",
   "Eu ❤️ sua risada contagiante.",
   "Eu ❤️ sua honestidade.",
   "Eu ❤️ como você me trata.",
   "Eu ❤️ sua generosidade.",
   "Eu ❤️ sua compaixão.",
   "Eu ❤️ seus abraços.",
   "Eu ❤️ sua atitude positiva.",
   "Eu ❤️ sua humildade.",
   "Eu ❤️ sua força interior.",
   "Eu ❤️ sua atenção aos detalhes.",
   "Eu ❤️ sua capacidade de ouvir.",
   "Eu ❤️ sua energia positiva.",
   "Eu ❤️ sua postura confiante.",
   "Eu ❤️ sua paciência.",
   "Eu ❤️ sua sensibilidade.",
   "Eu ❤️ sua perseverança.",
   "Eu ❤️ sua autenticidade.",
   "Eu ❤️ como você se destaca na multidão.",
   "Eu ❤️ como você torna os momentos simples especiais.",
   "Eu ❤️ sua atenção aos sentimentos dos outros.",
   "Eu ❤️ sua paixão pelos seus interesses e hobbies.",
   "Eu ❤️ seu esforço para falar comigo.",
   "Eu ❤️ seu jeito carinhoso com os animais.",
   "Eu ❤️ como você me faz sentir especial."
];


let mensagensExibidas = [];
let text = document.getElementById("text");

function obterMensagemAleatoria() {
   if (coisas.length === 0) {
      return "Eu ❤️ tudo em você";
   }

   const indiceAleatorio = Math.floor(Math.random() * coisas.length);
   const mensagemSelecionada = coisas.splice(indiceAleatorio, 1)[0];
   mensagensExibidas.push(mensagemSelecionada);

   return mensagemSelecionada;
}

let btn = document.getElementById("btn");

btn.addEventListener('click', function() {
   const mensagem = obterMensagemAleatoria();
   text.innerHTML += `<p>${mensagem}</p><br>`;
});
