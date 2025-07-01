// --- INICIALIZAÇÃO DO FIREBASE ---
// Garanta que o objeto 'firebaseConfig' esteja definido no seu arquivo firebase-config.js
firebase.initializeApp(firebaseConfig);
const db = firebase.database(); // Referência para o nosso Realtime Database

// --- SELEÇÃO DE ELEMENTOS DO HTML ---
const telaInicial = document.getElementById('tela-inicial');
const telaTemas = document.getElementById('tela-temas');
const telaNiveis = document.getElementById('tela-niveis');
const telaQuiz = document.getElementById('tela-quiz');
const telaResultado = document.getElementById('tela-resultado');
const telaAvaliacao = document.getElementById('tela-avaliacao');
const telaResultadoAvaliacao = document.getElementById('tela-resultado-avaliacao');
const telaRanking = document.getElementById('tela-ranking');

const btnIniciarAvaliacao = document.getElementById('btn-iniciar-avaliacao');
const btnIrParaTemas = document.getElementById('btn-ir-para-temas');
const btnJogarNovamenteResultado = document.getElementById('btn-jogar-novamente-resultado');
const btnVoltarParaTemas = document.getElementById('btn-voltar-para-temas');
const btnVoltarDoQuiz = document.getElementById('btn-voltar-do-quiz');
const btnProximaPergunta = document.getElementById('btn-proxima-pergunta');
const btnContinuarParaNiveis = document.getElementById('btn-continuar-para-niveis');
const btnVerOutrosTemas = document.getElementById('btn-ver-outros-temas');
const btnVoltarParaAvaliacao = document.getElementById('btn-voltar-para-avaliacao');
const btnSalvarPontuacao = document.getElementById('btn-salvar-pontuacao');
const btnVerRanking = document.getElementById('btn-ver-ranking');
const btnVoltarDoRanking = document.getElementById('btn-voltar-do-ranking');
const navLinkQuiz = document.getElementById('nav-link-quiz');
const navLinkRanking = document.getElementById('nav-link-ranking');

const inputNomeJogador = document.getElementById('input-nome-jogador');
const listaRanking = document.getElementById('lista-ranking');
const temasContainer = document.getElementById('temas-container');
const niveisContainer = document.getElementById('niveis-container');
const containerOpcoes = document.getElementById('container-opcoes');
const containerOpcoesAvaliacao = document.getElementById('container-opcoes-avaliacao');
const infoQuiz = document.getElementById('info-quiz');
const pontuacaoDisplay = document.getElementById('pontuacao');
const textoPergunta = document.getElementById('texto-pergunta');
const pontuacaoFinalDisplay = document.getElementById('pontuacao-final');
const textoPerguntaAvaliacao = document.getElementById('texto-pergunta-avaliacao');
const temaSugeridoDisplay = document.getElementById('tema-sugerido');
const tituloTemaSelecionado = document.getElementById('titulo-tema-selecionado');

const todasAsTelas = [telaInicial, telaTemas, telaNiveis, telaQuiz, telaResultado, telaAvaliacao, telaResultadoAvaliacao, telaRanking];

// --- ESTADO DO JOGO ---
const gameState = {
    tema: null, nivel: null, pontuacao: 0, perguntaAtual: 0, opcaoSelecionadaIndex: null,
    perguntaAtualAvaliacao: 0, pontosAvaliacao: { dados: 0, frontend: 0, backend: 0, devops: 0 }, multiplicador: 1
};

// --- FUNÇÕES GERAIS ---
function mostrarTela(telaParaMostrar) {
    todasAsTelas.forEach(tela => tela.classList.add('escondido'));
    telaParaMostrar.classList.remove('escondido');
}

function resetarJogo() {
    gameState.tema = null; gameState.nivel = null; gameState.pontuacao = 0; gameState.perguntaAtual = 0;
    gameState.opcaoSelecionadaIndex = null; gameState.perguntaAtualAvaliacao = 0;
    gameState.pontosAvaliacao = { dados: 0, frontend: 0, backend: 0, devops: 0 }; gameState.multiplicador = 1;
    document.body.removeAttribute('data-active-theme');
    mostrarTela(telaInicial);
}

// --- FUNÇÕES DO QUIZ PRINCIPAL ---
function carregarProximaPergunta() {
    gameState.opcaoSelecionadaIndex = null;
    btnProximaPergunta.style.display = 'none';
    btnProximaPergunta.textContent = 'Confirmar Resposta';
    const { tema, nivel, perguntaAtual } = gameState;
    const perguntas = bancoDeQuestoes[tema]?.[nivel] || [];
    if (!perguntas || perguntas.length === 0 || !perguntas[perguntaAtual]) {
        alert(`Desculpe, ainda não há perguntas para o tema '${tema}' no nível '${nivel}'. Voltando ao início.`);
        resetarJogo();
        return;
    }
    const perguntaObj = perguntas[perguntaAtual];
    textoPergunta.textContent = perguntaObj.pergunta;
    containerOpcoes.innerHTML = '';
    perguntaObj.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.className = 'btn-opcao';
        botao.textContent = opcao;
        botao.addEventListener('click', () => selecionarOpcao(botao, index));
        containerOpcoes.appendChild(botao);
    });
}

function selecionarOpcao(botaoClicado, index) {
    gameState.opcaoSelecionadaIndex = index;
    const todosOsBotoes = containerOpcoes.querySelectorAll('.btn-opcao');
    todosOsBotoes.forEach(btn => btn.classList.remove('selecionada'));
    botaoClicado.classList.add('selecionada');
    btnProximaPergunta.style.display = 'block';
}

function checarResposta() {
    const { tema, nivel, perguntaAtual, opcaoSelecionadaIndex, multiplicador } = gameState;
    const perguntaObj = bancoDeQuestoes[tema][nivel][perguntaAtual];
    const respostaCorretaIndex = perguntaObj.resposta;
    const todosOsBotoes = containerOpcoes.querySelectorAll('.btn-opcao');
    const botaoSelecionado = todosOsBotoes[opcaoSelecionadaIndex];
    todosOsBotoes.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('selecionada');
    });
    if (opcaoSelecionadaIndex === respostaCorretaIndex) {
        botaoSelecionado.classList.add('correta');
        gameState.pontuacao += (10 * multiplicador);
        pontuacaoDisplay.textContent = `Pontos: ${gameState.pontuacao}`;
    } else {
        botaoSelecionado.classList.add('errada');
        todosOsBotoes[respostaCorretaIndex].classList.add('correta');
    }
    btnProximaPergunta.textContent = 'Próxima Pergunta';
}

function finalizarQuiz() {
    pontuacaoFinalDisplay.textContent = gameState.pontuacao;
    mostrarTela(telaResultado);
}

// --- FUNÇÕES DO TESTE DE AVALIAÇÃO ---
function iniciarTesteAvaliacao() {
    gameState.perguntaAtualAvaliacao = 0;
    gameState.pontosAvaliacao = { dados: 0, frontend: 0, backend: 0, devops: 0 };
    mostrarTela(telaAvaliacao);
    carregarPerguntaAvaliacao();
}

function carregarPerguntaAvaliacao() {
    const perguntaObj = testeAvaliacao[gameState.perguntaAtualAvaliacao];
    textoPerguntaAvaliacao.textContent = perguntaObj.pergunta;
    containerOpcoesAvaliacao.innerHTML = '';
    perguntaObj.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.className = 'btn-opcao';
        botao.textContent = opcao.texto;
        botao.addEventListener('click', () => registrarRespostaAvaliacao(opcao.tema));
        containerOpcoesAvaliacao.appendChild(botao);
    });
}

function registrarRespostaAvaliacao(tema) {
    gameState.pontosAvaliacao[tema]++;
    gameState.perguntaAtualAvaliacao++;
    if (gameState.perguntaAtualAvaliacao < testeAvaliacao.length) {
        carregarPerguntaAvaliacao();
    } else {
        finalizarTesteAvaliacao();
    }
}

function finalizarTesteAvaliacao() {
    const pontos = gameState.pontosAvaliacao;
    let temaSugerido = Object.keys(pontos).reduce((a, b) => pontos[a] > pontos[b] ? a : b);
    gameState.tema = temaSugerido;
    const temaFormatado = temaSugerido.charAt(0).toUpperCase() + temaSugerido.slice(1);
    document.body.setAttribute('data-active-theme', temaSugerido);
    temaSugeridoDisplay.textContent = temaFormatado;
    mostrarTela(telaResultadoAvaliacao);
}

// --- FUNÇÕES DO RANKING (FIREBASE) ---
function salvarPontuacao() {
    const nomeJogador = inputNomeJogador.value.trim();
    if (!nomeJogador) { alert("Por favor, digite um nome!"); return; }
    const novaPontuacao = {
        nome: nomeJogador, pontuacao: gameState.pontuacao,
        tema: gameState.tema.charAt(0).toUpperCase() + gameState.tema.slice(1),
        nivel: gameState.nivel.charAt(0).toUpperCase() + gameState.nivel.slice(1),
        pontuacaoNegativa: -gameState.pontuacao
    };
    const novaPontuacaoRef = db.ref('ranking').push();
    novaPontuacaoRef.set(novaPontuacao)
        .then(() => {
            console.log("Pontuação salva com sucesso!");
            mostrarRanking();
        })
        .catch((error) => {
            console.error("Erro ao salvar pontuação: ", error);
            alert("Não foi possível salvar sua pontuação. Tente novamente.");
        });
}

function mostrarRanking() {
    const rankingRef = db.ref('ranking');
    const consultaRanking = rankingRef.orderByChild('pontuacaoNegativa').limitToFirst(10);
    consultaRanking.on('value', (snapshot) => {
        listaRanking.innerHTML = '';
        if (!snapshot.exists()) {
            listaRanking.innerHTML = '<li><p>Nenhuma pontuação registrada ainda. Seja o primeiro!</p></li>';
        } else {
            const ranking = [];
            snapshot.forEach((childSnapshot) => { ranking.push(childSnapshot.val()); });
            ranking.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="ranking-nome">${index + 1}. ${item.nome}</span>
                    <div class="ranking-info">
                        <span>${item.tema} (${item.nivel})</span>
                        <span class="ranking-pontos">${item.pontuacao} pts</span>
                    </div>
                `;
                listaRanking.appendChild(li);
            });
        }
    }, (error) => {
        console.error("Erro ao carregar o ranking: ", error);
        listaRanking.innerHTML = '<li><p>Não foi possível carregar o ranking.</p></li>';
    });
    mostrarTela(telaRanking);
}

// --- LÓGICA DE NAVEGAÇÃO E EVENT LISTENERS ---
btnIniciarAvaliacao.addEventListener('click', iniciarTesteAvaliacao);
btnIrParaTemas.addEventListener('click', () => { document.body.removeAttribute('data-active-theme'); mostrarTela(telaTemas); });
btnJogarNovamenteResultado.addEventListener('click', resetarJogo);
btnVoltarParaTemas.addEventListener('click', () => { document.body.removeAttribute('data-active-theme'); mostrarTela(telaTemas); });
btnVoltarDoQuiz.addEventListener('click', () => mostrarTela(telaNiveis));
btnVoltarParaAvaliacao.addEventListener('click', resetarJogo);
btnContinuarParaNiveis.addEventListener('click', () => {
    const temaFormatado = gameState.tema.charAt(0).toUpperCase() + gameState.tema.slice(1);
    tituloTemaSelecionado.textContent = `Tema: ${temaFormatado}`;
    mostrarTela(telaNiveis);
});
btnVerOutrosTemas.addEventListener('click', () => { document.body.removeAttribute('data-active-theme'); mostrarTela(telaTemas); });
btnSalvarPontuacao.addEventListener('click', salvarPontuacao);
btnVerRanking.addEventListener('click', mostrarRanking);
btnVoltarDoRanking.addEventListener('click', resetarJogo);
navLinkQuiz.addEventListener('click', (event) => { event.preventDefault(); resetarJogo(); });
navLinkRanking.addEventListener('click', (event) => { event.preventDefault(); mostrarRanking(); });

const botoesTema = temasContainer.querySelectorAll('.btn-selecao[data-tema]');
botoesTema.forEach(botao => {
    botao.addEventListener('click', () => {
        const temaEscolhido = botao.dataset.tema;
        gameState.tema = temaEscolhido;
        document.body.setAttribute('data-active-theme', temaEscolhido);
        const temaFormatado = temaEscolhido.charAt(0).toUpperCase() + temaEscolhido.slice(1);
        tituloTemaSelecionado.textContent = `Tema: ${temaFormatado}`;
        mostrarTela(telaNiveis);
    });
});

const botoesNivel = niveisContainer.querySelectorAll('.btn-selecao[data-nivel]');
botoesNivel.forEach(botao => {
    botao.addEventListener('click', () => {
        gameState.nivel = botao.dataset.nivel;
        gameState.multiplicador = parseFloat(botao.dataset.multiplicador);
        const temaFormatado = gameState.tema.charAt(0).toUpperCase() + gameState.tema.slice(1);
        const nivelFormatado = gameState.nivel.charAt(0).toUpperCase() + gameState.nivel.slice(1);
        infoQuiz.textContent = `Tema: ${temaFormatado} | Nível: ${nivelFormatado}`;
        pontuacaoDisplay.textContent = `Pontos: 0`;
        mostrarTela(telaQuiz);
        carregarProximaPergunta();
    });
});

btnProximaPergunta.addEventListener('click', () => {
    if (btnProximaPergunta.textContent === 'Confirmar Resposta') {
        if (gameState.opcaoSelecionadaIndex !== null) { checarResposta(); }
    } else {
        gameState.perguntaAtual++;
        const { tema, nivel, perguntaAtual } = gameState;
        const totalPerguntas = bancoDeQuestoes[tema][nivel].length;
        if (perguntaAtual < totalPerguntas) {
            carregarProximaPergunta();
        } else {
            finalizarQuiz();
        }
    }
});

// --- LÓGICA INICIAL DO JOGO ---
resetarJogo();