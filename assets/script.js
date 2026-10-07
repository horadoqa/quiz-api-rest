const perguntas = [
  {
    pergunta: "Em se tratando de API, o que significa REST?",
    opcoes: [
      "Reze e Execute Seu Teste",
      "Representational State Transfer",
      "Requisição, Execução, Serviço e Transação",
      "Recurso, Endpoint, Serviço e Transporte"
    ],
    correta: 1
  },

  {
    pergunta: "O que é uma API REST?",
    opcoes: [
      "Um banco de dados relacional",
      "Uma arquitetura para comunicação entre sistemas utilizando HTTP",
      "Uma linguagem de programação",
      "Um sistema operacional"
    ],
    correta: 1
  },

  {
    pergunta: "Qual método HTTP é normalmente utilizado para consultar dados em uma API REST?",
    opcoes: [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    correta: 2
  },

  {
    pergunta: "Qual método HTTP é normalmente utilizado para criar um novo recurso?",
    opcoes: [
      "GET",
      "POST",
      "DELETE",
      "PATCH"
    ],
    correta: 1
  },

  {
    pergunta: "Qual método HTTP é utilizado para remover um recurso?",
    opcoes: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correta: 3
  },

  {
    pergunta: "Qual método HTTP é normalmente utilizado para atualizar completamente um recurso?",
    opcoes: [
      "PUT",
      "GET",
      "POST",
      "DELETE"
    ],
    correta: 0
  },

  {
    pergunta: "Qual método HTTP é normalmente utilizado para atualizar parcialmente um recurso?",
    opcoes: [
      "GET",
      "PATCH",
      "POST",
      "OPTIONS"
    ],
    correta: 1
  },

  {
    pergunta: "Qual código HTTP indica que uma requisição foi realizada com sucesso?",
    opcoes: [
      "200",
      "400",
      "404",
      "500"
    ],
    correta: 0
  },

  {
    pergunta: "O que significa o código HTTP 201?",
    opcoes: [
      "Unauthorized",
      "Not Found",
      "Created",
      "Internal Server Error"
    ],
    correta: 2
  },

  {
    pergunta: "O que significa o código HTTP 400?",
    opcoes: [
      "Bad Request",
      "Created",
      "OK",
      "Not Found"
    ],
    correta: 0
  },

  {
    pergunta: "O que significa o código HTTP 401?",
    opcoes: [
      "Forbidden",
      "Unauthorized",
      "Not Found",
      "Bad Gateway"
    ],
    correta: 1
  },

  {
    pergunta: "O que significa o código HTTP 403?",
    opcoes: [
      "Forbidden",
      "Unauthorized",
      "Bad Request",
      "Created"
    ],
    correta: 0
  },

  {
    pergunta: "O que significa o código HTTP 404?",
    opcoes: [
      "Server Error",
      "Unauthorized",
      "Not Found",
      "Created"
    ],
    correta: 2
  },

  {
    pergunta: "O que significa o código HTTP 500?",
    opcoes: [
      "Bad Request",
      "Internal Server Error",
      "Not Found",
      "Unauthorized"
    ],
    correta: 1
  },

  {
    pergunta: "Qual formato é muito utilizado para representar dados em APIs REST?",
    opcoes: [
      "JSON",
      "EXE",
      "MP3",
      "PNG"
    ],
    correta: 0
  },

  {
    pergunta: "Em uma API REST, o que representa um endpoint?",
    opcoes: [
      "Um banco de dados",
      "Uma URL que permite acessar determinado recurso ou operação",
      "Uma senha de autenticação",
      "Um arquivo de configuração"
    ],
    correta: 1
  },

  {
    pergunta: "Qual cabeçalho HTTP indica o formato dos dados enviados no corpo da requisição?",
    opcoes: [
      "Authorization",
      "Accept",
      "Content-Type",
      "User-Agent"
    ],
    correta: 2
  },

  {
    pergunta: "Qual cabeçalho HTTP pode ser utilizado para informar o formato que o cliente aceita receber?",
    opcoes: [
      "Accept",
      "Content-Type",
      "Authorization",
      "Host"
    ],
    correta: 0
  },

  {
    pergunta: "Onde normalmente são enviados dados ao criar um recurso utilizando POST?",
    opcoes: [
      "No body da requisição",
      "Somente no status code",
      "No status da resposta",
      "No método HTTP"
    ],
    correta: 0
  },

  {
    pergunta: "O que é autenticação em uma API?",
    opcoes: [
      "Processo de verificar a identidade de quem está fazendo a requisição",
      "Processo de excluir um recurso",
      "Processo de converter JSON para XML",
      "Processo de alterar o método HTTP"
    ],
    correta: 0
  },

  {
    pergunta: "Qual é um exemplo comum de informação utilizada para autenticação em APIs?",
    opcoes: [
      "Token",
      "Imagem",
      "CSS",
      "HTML"
    ],
    correta: 0
  },

  {
    pergunta: "O que é um parâmetro de query em uma URL?",
    opcoes: [
      "Uma informação enviada após o caractere ? na URL",
      "O código HTTP da resposta",
      "O corpo da requisição",
      "O método HTTP utilizado"
    ],
    correta: 0
  },

  {
    pergunta: "Qual URL possui um exemplo de parâmetro de query?",
    opcoes: [
      "/usuarios/10",
      "/usuarios?nome=Joao",
      "/usuarios/post",
      "/usuarios#nome"
    ],
    correta: 1
  },

  {
    pergunta: "O que é um parâmetro de rota (path parameter)?",
    opcoes: [
      "Um valor enviado dentro do caminho da URL",
      "Um cabeçalho HTTP",
      "Um código de resposta",
      "Um método HTTP"
    ],
    correta: 0
  },

  {
    pergunta: "Qual URL utiliza um parâmetro de rota para identificar um usuário?",
    opcoes: [
      "/usuarios? id=10",
      "/usuarios/10",
      "/usuarios?id",
      "/usuarios#10"
    ],
    correta: 1
  },

  {
    pergunta: "Em uma API REST, o que representa o recurso /usuarios?",
    opcoes: [
      "Uma coleção de recursos relacionados a usuários",
      "Um código HTTP",
      "Um token de autenticação",
      "Um método HTTP"
    ],
    correta: 0
  },

  {
    pergunta: "Qual método HTTP é considerado idempotente?",
    opcoes: [
      "GET",
      "POST",
      "PATCH",
      "Nenhum deles"
    ],
    correta: 0
  },

  {
    pergunta: "O que significa dizer que uma API REST é stateless?",
    opcoes: [
      "O servidor não mantém estado da sessão do cliente entre requisições",
      "A API não pode utilizar JSON",
      "A API não possui endpoints",
      "O servidor nunca responde às requisições"
    ],
    correta: 0
  },

  {
    pergunta: "Qual ferramenta pode ser utilizada para testar manualmente uma API REST?",
    opcoes: [
      "Postman",
      "Photoshop",
      "Excel",
      "PowerPoint"
    ],
    correta: 0
  },

  {
    pergunta: "No Cypress, qual comando pode ser utilizado para realizar uma requisição HTTP?",
    opcoes: [
      "cy.http()",
      "cy.fetch()",
      "cy.request()",
      "cy.api()"
    ],
    correta: 2
  }
];


/* =====================================================
   EMBARALHAR ARRAY
   ===================================================== */

function embaralhar(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}


/* =====================================================
   CRIAR NOVA PARTIDA
   ===================================================== */

function criarPerguntasDaPartida() {

  return embaralhar(perguntas).map(pergunta => {

    // Guarda a resposta correta original
    const respostaCorreta = pergunta.opcoes[pergunta.correta];

    // Embaralha as alternativas
    const opcoesEmbaralhadas = embaralhar(pergunta.opcoes);

    // Descobre a nova posição da resposta correta
    const novaPosicaoCorreta =
      opcoesEmbaralhadas.indexOf(respostaCorreta);

    return {
      pergunta: pergunta.pergunta,
      opcoes: opcoesEmbaralhadas,
      correta: novaPosicaoCorreta
    };

  });

}


/* =====================================================
   VARIÁVEIS DO QUIZ
   ===================================================== */

let indiceAtual = 0;
let pontuacao = 0;

let perguntasDaPartida = criarPerguntasDaPartida();


/* =====================================================
   ELEMENTOS HTML
   ===================================================== */

const elPergunta = document.getElementById('pergunta');
const elOpcoes = document.getElementById('opcoes');
const elContador = document.getElementById('contador');
const elFeedback = document.getElementById('feedback');
const elProximaBtn = document.getElementById('proxima-btn');

const elTelaQuiz = document.getElementById('tela-quiz');
const elTelaResultado = document.getElementById('tela-resultado');

const elPontuacaoFinal = document.getElementById('pontuacao-final');
const elMensagemFinal = document.getElementById('mensagem-final');

const elReiniciarBtn = document.getElementById('reiniciar-btn');


/* =====================================================
   CARREGAR PERGUNTA
   ===================================================== */

function carregarPergunta() {

  const atual = perguntasDaPartida[indiceAtual];

  // Disponibiliza informações da pergunta atual para os testes
  window.quizAtual = {
    pergunta: atual.pergunta,
    correta: atual.correta,
    respostaCorreta: atual.opcoes[atual.correta]
  };

  elContador.textContent =
    `Pergunta ${indiceAtual + 1} de ${perguntasDaPartida.length}`;

  elPergunta.textContent = atual.pergunta;

  elFeedback.textContent = '';
  elFeedback.className = '';

  elProximaBtn.style.display = 'none';

  elOpcoes.innerHTML = '';


  /* =====================================================
     CRIAR BOTÕES DAS ALTERNATIVAS
     ===================================================== */

  atual.opcoes.forEach((opcao, i) => {

    const btn = document.createElement('button');

    btn.className = 'resposta-btn';

    btn.textContent = opcao;

    btn.setAttribute('data-index', i);

    btn.addEventListener('click', () => responder(i));

    elOpcoes.appendChild(btn);

  });

}


/* =====================================================
   RESPONDER PERGUNTA
   ===================================================== */

function responder(indiceEscolhido) {

  const atual = perguntasDaPartida[indiceAtual];

  console.log("================================");
  console.log("Pergunta:", atual.pergunta);
  console.log("Alternativas:", atual.opcoes);
  console.log("Índice escolhido:", indiceEscolhido);
  console.log("Índice correto:", atual.correta);
  console.log("Resposta correta:", atual.opcoes[atual.correta]);

  const botoes =
    document.querySelectorAll('.resposta-btn');


  /* Desabilita todas as alternativas */

  botoes.forEach(btn => {
    btn.disabled = true;
  });


  /* =====================================================
     RESPOSTA CORRETA
     ===================================================== */

  if (indiceEscolhido === atual.correta) {

    pontuacao++;

    elFeedback.textContent = 'Correto!';

    elFeedback.className = 'acerto';

    botoes[indiceEscolhido]
      .classList.add('correta');

  }


  /* =====================================================
     RESPOSTA ERRADA
     ===================================================== */

  else {

    elFeedback.textContent =
      `Errado! A resposta certa era: ${atual.opcoes[atual.correta]}`;

    elFeedback.className = 'erro';

    botoes[indiceEscolhido]
      .classList.add('errada');

    botoes[atual.correta]
      .classList.add('correta');

  }


  /* Mostra botão próxima pergunta */

  elProximaBtn.style.display = 'block';

}


/* =====================================================
   PRÓXIMA PERGUNTA
   ===================================================== */

elProximaBtn.addEventListener('click', () => {

  indiceAtual++;

  if (indiceAtual < perguntasDaPartida.length) {

    carregarPergunta();

  } else {

    mostrarResultado();

  }

});


/* =====================================================
   MOSTRAR RESULTADO
   ===================================================== */

function mostrarResultado() {

  elTelaQuiz.style.display = 'none';

  elTelaResultado.style.display = 'block';


  elPontuacaoFinal.textContent =
    `${pontuacao} / ${perguntasDaPartida.length}`;


  let mensagem;


  if (pontuacao === perguntasDaPartida.length) {

    mensagem = 'Excelente! Você acertou tudo!';

  }

  else if (pontuacao >= perguntasDaPartida.length / 2) {

    mensagem = 'Muito bom! Continue assim.';

  }

  else {

    mensagem = 'Continue estudando e tente novamente!';

  }


  elMensagemFinal.textContent = mensagem;

  elReiniciarBtn.style.display = 'block';

}


/* =====================================================
   REINICIAR QUIZ
   ===================================================== */

elReiniciarBtn.addEventListener('click', () => {

  indiceAtual = 0;

  pontuacao = 0;


  /* =====================================================
     GERA UMA NOVA ORDEM DE PERGUNTAS E ALTERNATIVAS
     ===================================================== */

  perguntasDaPartida = criarPerguntasDaPartida();


  elTelaResultado.style.display = 'none';

  elTelaQuiz.style.display = 'block';


  carregarPergunta();

});


/* =====================================================
   INICIAR QUIZ
   ===================================================== */

carregarPergunta();
