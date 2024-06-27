const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




const perguntas = [
   {
       enunciado: "Qual é o principal objetivo dos estudos realizados em parques nacionais e reservas naturais?",
       alternativas: [
           {
               texto: "Compreender a biodiversidade e os ecossistemas",
         
           },
           {
               texto: "Identificar áreas para desenvolvimento urbano",
             
           }
       ]
   },
   {
       enunciado: "Quais tipos de atividades são geralmente permitidos em áreas de preservação ambiental?",
       alternativas: [
           {
               texto: "Turismo sustentável e pesquisa científica",
             
           },
           {
               texto: "Mineração e exploração de madeira",
             
           }
       ]
   },
   {
       enunciado: "Qual é um dos principais benefícios das áreas de preservação ambiental para as comunidades locais?",
       alternativas: [
           {
               texto: "Proteção dos recursos naturais e manutenção dos serviços ecossistêmicos",
             
           },
           {
               texto: "Expansão das áreas urbanas e industriais",
             
           }
       ]
   },
 
];








let atual = 0;
let perguntaAtual;
let historiaFinal = "";




function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}




function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}




function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}




function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}




mostraPergunta();

