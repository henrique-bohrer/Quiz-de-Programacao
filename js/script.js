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
const telaSugestao = document.getElementById('tela-sugestao');
const backgroundIconsContainer = document.getElementById('background-icons');

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
const btnEnviarSugestao = document.getElementById('btn-enviar-sugestao');
const btnVoltarDaSugestao = document.getElementById('btn-voltar-da-sugestao');

const navLinkQuiz = document.getElementById('nav-link-quiz');
const navLinkRanking = document.getElementById('nav-link-ranking');
const navLinkSugestao = document.getElementById('nav-link-sugestao');

const inputNomeJogador = document.getElementById('input-nome-jogador');
const inputSugestao = document.getElementById('input-sugestao');
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

const todasAsTelas = [telaInicial, telaTemas, telaNiveis, telaQuiz, telaResultado, telaAvaliacao, telaResultadoAvaliacao, telaRanking, telaSugestao];

// --- ESTADO DO JOGO ---
const gameState = {
    tema: null, nivel: null, pontuacao: 0, perguntaAtual: 0, opcaoSelecionadaIndex: null,
    perguntaAtualAvaliacao: 0, pontosAvaliacao: { dados: 0, frontend: 0, backend: 0, devops: 0 }, multiplicador: 1,
    perguntasAtuais: [] // Armazena as perguntas embaralhadas da partida
};

// --- FUNÇÕES GERAIS ---
function mostrarTela(telaParaMostrar) {
    const telaAtual = todasAsTelas.find(tela => !tela.classList.contains('escondido'));

    if (telaAtual) {
        telaAtual.classList.add('fade-out');
        setTimeout(() => {
            telaAtual.classList.add('escondido');
            telaAtual.classList.remove('fade-out');
            telaParaMostrar.classList.remove('escondido');
            telaParaMostrar.classList.add('fade-in');
        }, 300);
    } else {
        telaParaMostrar.classList.remove('escondido');
        telaParaMostrar.classList.add('fade-in');
    }
}

function resetarJogo() {
    gameState.tema = null; gameState.nivel = null; gameState.pontuacao = 0; gameState.perguntaAtual = 0;
    gameState.opcaoSelecionadaIndex = null; gameState.perguntaAtualAvaliacao = 0;
    gameState.pontosAvaliacao = { dados: 0, frontend: 0, backend: 0, devops: 0 }; gameState.multiplicador = 1;
    gameState.perguntasAtuais = [];
    document.body.removeAttribute('data-active-theme');
    atualizarLogo(null);
    gerarIconesDeFundo(null);
    mostrarTela(telaInicial);
}

function atualizarLogo(tema) {
    const todosOsLogos = document.querySelectorAll('.navbar-logo');
    todosOsLogos.forEach(logo => logo.classList.remove('active-logo'));
    const logoAtivo = document.querySelector(tema ? `.navbar-logo[src*="${tema}"]` : '.logo-default');
    if (logoAtivo) {
        logoAtivo.classList.add('active-logo');
    } else {
        document.querySelector('.logo-default').classList.add('active-logo');
    }
}

function gerarIconesDeFundo(tema) {
    backgroundIconsContainer.innerHTML = '';
    if (!tema) return;
    const iconesPorTema = {
        dados: ['fa-database', 'fa-chart-bar', 'fa-table', 'fa-cogs', 'fa-calculator', 'fa-search-dollar'],
        frontend: ['fa-code', 'fa-css3-alt', 'fa-html5', 'fa-js-square', 'fa-palette', 'fa-react'],
        backend: ['fa-server', 'fa-database', 'fa-code-branch', 'fa-bolt', 'fa-key', 'fa-network-wired'],
        devops: ['fa-cloud-upload-alt', 'fa-docker', 'fa-infinity', 'fa-git-alt', 'fa-terminal', 'fa-sitemap']
    };
    const iconesDoTema = iconesPorTema[tema];
    if (!iconesDoTema) return;
    for (let i = 0; i < 25; i++) {
        const icon = document.createElement('i');
        const randomIcon = iconesDoTema[Math.floor(Math.random() * iconesDoTema.length)];
        icon.className = `fas ${randomIcon}`;
        icon.style.top = `${Math.random() * 100}vh`;
        icon.style.left = `${Math.random() * 100}vw`;
        icon.style.fontSize = `${Math.random() * 10 + 5}rem`;
        icon.style.animationDuration = `${Math.random() * 15 + 10}s`;
        icon.style.animationDelay = `${Math.random() * 5}s`;
        icon.style.opacity = Math.random() * 0.08 + 0.02;
        backgroundIconsContainer.appendChild(icon);
    }
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- FUNÇÕES DO QUIZ PRINCIPAL ---
function carregarProximaPergunta() {
    gameState.opcaoSelecionadaIndex = null;
    btnProximaPergunta.style.display = 'none';
    btnProximaPergunta.textContent = 'Confirmar Resposta';

    const perguntaObj = gameState.perguntasAtuais[gameState.perguntaAtual];

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
    const { perguntaAtual, opcaoSelecionadaIndex, multiplicador } = gameState;
    const perguntaObj = gameState.perguntasAtuais[perguntaAtual];
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
    atualizarLogo(temaSugerido);
    gerarIconesDeFundo(temaSugerido);
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
    db.ref('ranking').push().set(novaPontuacao)
        .then(() => { console.log("Pontuação salva!"); mostrarRanking(); })
        .catch((error) => { console.error("Erro: ", error); alert("Não foi possível salvar."); });
}

function mostrarRanking() {
    const consultaRanking = db.ref('ranking').orderByChild('pontuacaoNegativa').limitToFirst(10);
    consultaRanking.on('value', (snapshot) => {
        listaRanking.innerHTML = '';
        if (!snapshot.exists()) {
            listaRanking.innerHTML = '<li><p>Nenhuma pontuação registrada ainda.</p></li>';
        } else {
            const ranking = [];
            snapshot.forEach((childSnapshot) => { ranking.push(childSnapshot.val()); });
            ranking.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="ranking-nome">${index + 1}. ${item.nome}</span><div class="ranking-info"><span>${item.tema} (${item.nivel})</span><span class="ranking-pontos">${item.pontuacao} pts</span></div>`;
                listaRanking.appendChild(li);
            });
        }
    }, (error) => { console.error("Erro: ", error); listaRanking.innerHTML = '<li><p>Não foi possível carregar o ranking.</p></li>'; });
    atualizarLogo(null);
    gerarIconesDeFundo(null);
    mostrarTela(telaRanking);
}

// --- FUNÇÕES DA CAIXA DE SUGESTÕES ---
function enviarSugestao() {
    const sugestaoTexto = inputSugestao.value.trim();
    if (sugestaoTexto.length < 10) { alert("Por favor, escreva uma sugestão com pelo menos 10 caracteres."); return; }
    const novaSugestao = { texto: sugestaoTexto, data: new Date().toISOString() };
    db.ref('sugestoes').push().set(novaSugestao)
        .then(() => {
            alert("Obrigado! Sua sugestão foi enviada com sucesso.");
            inputSugestao.value = '';
            resetarJogo();
        })
        .catch((error) => { console.error("Erro ao enviar sugestão: ", error); alert("Ocorreu um erro."); });
}

// --- LÓGICA DE NAVEGAÇÃO E EVENT LISTENERS ---
btnIniciarAvaliacao.addEventListener('click', iniciarTesteAvaliacao);
btnIrParaTemas.addEventListener('click', () => { document.body.removeAttribute('data-active-theme'); atualizarLogo(null); gerarIconesDeFundo(null); mostrarTela(telaTemas); });
btnJogarNovamenteResultado.addEventListener('click', resetarJogo);
btnVoltarParaTemas.addEventListener('click', () => { document.body.removeAttribute('data-active-theme'); atualizarLogo(null); gerarIconesDeFundo(null); mostrarTela(telaTemas); });
btnVoltarDoQuiz.addEventListener('click', () => mostrarTela(telaNiveis));
btnVoltarParaAvaliacao.addEventListener('click', resetarJogo);
btnContinuarParaNiveis.addEventListener('click', () => {
    const temaFormatado = gameState.tema.charAt(0).toUpperCase() + gameState.tema.slice(1);
    tituloTemaSelecionado.textContent = `Tema: ${temaFormatado}`;
    mostrarTela(telaNiveis);
});
btnVerOutrosTemas.addEventListener('click', () => { document.body.removeAttribute('data-active-theme'); atualizarLogo(null); gerarIconesDeFundo(null); mostrarTela(telaTemas); });
btnSalvarPontuacao.addEventListener('click', salvarPontuacao);
btnVerRanking.addEventListener('click', mostrarRanking);
btnVoltarDoRanking.addEventListener('click', resetarJogo);
btnEnviarSugestao.addEventListener('click', enviarSugestao);
btnVoltarDaSugestao.addEventListener('click', resetarJogo);

navLinkQuiz.addEventListener('click', (event) => { event.preventDefault(); resetarJogo(); });
navLinkRanking.addEventListener('click', (event) => { event.preventDefault(); mostrarRanking(); });
navLinkSugestao.addEventListener('click', (event) => { event.preventDefault(); mostrarTela(telaSugestao); });

const botoesTema = temasContainer.querySelectorAll('.btn-selecao[data-tema]');
botoesTema.forEach(botao => {
    botao.addEventListener('click', () => {
        const temaEscolhido = botao.dataset.tema;
        gameState.tema = temaEscolhido;
        document.body.setAttribute('data-active-theme', temaEscolhido);
        atualizarLogo(temaEscolhido);
        gerarIconesDeFundo(temaEscolhido);
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

        const perguntasOriginais = bancoDeQuestoes[gameState.tema]?.[gameState.nivel] || [];
        if(perguntasOriginais.length === 0){
             alert(`Desculpe, ainda não há perguntas para o tema '${gameState.tema}' no nível '${gameState.nivel}'. Voltando ao início.`);
             resetarJogo();
             return;
        }
        gameState.perguntasAtuais = embaralharArray([...perguntasOriginais]);

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
        const totalPerguntas = gameState.perguntasAtuais.length;
        if (gameState.perguntaAtual < totalPerguntas) {
            carregarProximaPergunta();
        } else {
            finalizarQuiz();
        }
    }
});

// --- LÓGICA INICIAL DO JOGO ---
resetarJogo();