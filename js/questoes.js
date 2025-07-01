const testeAvaliacao = [
  {
      pergunta: "Qual destas tarefas mais te interessa em um projeto?",
      opcoes: [
          { texto: "Criar a interface visual que o usuário vê e interage.", tema: "frontend" },
          { texto: "Construir a lógica do servidor e gerenciar bancos de dados.", tema: "backend" },
          { texto: "Analisar grandes volumes de dados para encontrar padrões.", tema: "dados" },
          { texto: "Automatizar a infraestrutura e o processo de deploy.", tema: "devops" }
      ]
  },
  {
      pergunta: "Se você tivesse que resolver um problema, qual abordagem você preferiria?",
      opcoes: [
          { texto: "Usar SQL para consultar e extrair a informação exata que preciso.", tema: "dados" },
          { texto: "Otimizar o pipeline de integração contínua (CI/CD).", tema: "devops" },
          { texto: "Desenvolver um componente de UI reutilizável com JavaScript.", tema: "frontend" },
          { texto: "Criar uma API RESTful para conectar o cliente ao servidor.", tema: "backend" }
      ]
  },
  {
      pergunta: "Qual tecnologia ou conceito você tem mais curiosidade de aprender?",
      opcoes: [
          { texto: "Node.js ou Django.", tema: "backend" },
          { texto: "React ou Vue.js.", tema: "frontend" },
          { texto: "Docker ou Kubernetes.", tema: "devops" },
          { texto: "Machine Learning ou Power BI.", tema: "dados" }
      ]
  }
];

const bancoDeQuestoes = {
  dados: {
      estagiario: [
          { pergunta: "O que é um 'Banco de Dados'?", opcoes: ["Um tipo de planilha online", "Um programa para editar textos", "Uma coleção organizada de informações", "Um componente físico do computador"], resposta: 2 },
          { pergunta: "Qual o principal objetivo de uma cláusula `WHERE` em SQL?", opcoes: ["Ordenar os resultados", "Filtrar os resultados", "Agrupar os resultados", "Juntar tabelas"], resposta: 1 }
      ],
      junior: [
          { pergunta: "Qual comando SQL é usado para selecionar dados de um banco de dados?", opcoes: ["SELECT", "UPDATE", "INSERT", "DELETE"], resposta: 0 },
          { pergunta: "Em Python, qual biblioteca é mais comumente usada para manipulação e análise de dados em DataFrames?", opcoes: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"], resposta: 2 },
          { pergunta: "O que significa a sigla 'ETL'?", opcoes: ["Execute, Test, Load", "Extract, Transform, Load", "Export, Transfer, Link", "Estimate, Track, Log"], resposta: 1 }
      ],
      pleno: [
           { pergunta: "Qual a principal diferença entre `UNION` e `UNION ALL` em SQL?", opcoes: ["UNION ALL é mais rápido pois não remove duplicatas", "UNION é mais rápido pois usa índices", "Não há diferença funcional", "UNION ALL só funciona em tabelas com o mesmo nome"], resposta: 0 },
           { pergunta: "O que é 'Data Warehousing'?", opcoes: ["O ato de deletar dados antigos", "Um sistema para armazenar dados de múltiplas fontes para análise", "A compressão de arquivos de dados", "Um tipo de backup de banco de dados"], resposta: 1 }
      ],
      senior: []
  },
  frontend: {
      estagiario: [
          { pergunta: "O que significa a sigla HTML?", opcoes: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"], resposta: 0 },
          { pergunta: "Qual tag HTML é usada para criar um link?", opcoes: ["<link>", "<href>", "<a>", "<p>"], resposta: 2 }
      ],
      junior: [
          { pergunta: "Qual propriedade do CSS é usada para alterar a cor do texto de um elemento?", opcoes: ["font-color", "text-color", "background-color", "color"], resposta: 3 },
          { pergunta: "O que o `box-sizing: border-box;` faz em CSS?", opcoes: ["Cria uma borda pontilhada", "Aumenta o tamanho da caixa", "Inclui padding e border no tamanho total do elemento", "Centraliza a caixa na tela"], resposta: 2 }
      ],
      pleno: [
          { pergunta: "No JavaScript, qual a principal diferença entre `let` e `const`?", opcoes: ["`let` é para números, `const` é para textos", "`const` não pode ter seu valor reatribuído", "`let` é global, `const` é local", "Não há diferença"], resposta: 1 },
          { pergunta: "O que é o 'DOM' no contexto do desenvolvimento web?", opcoes: ["Um modelo de design de sites", "Uma representação em árvore do documento HTML", "Um servidor de arquivos", "Uma linguagem de estilização"], resposta: 1 }
      ],
      senior: []
  },
  backend: {
      estagiario: [
          { pergunta: "O que é uma API?", opcoes: ["Um aplicativo de celular", "Uma interface para dois sistemas conversarem", "Um tipo de banco de dados", "Uma linguagem de programação"], resposta: 1 },
          { pergunta: "Qual status HTTP indica que uma requisição foi bem-sucedida?", opcoes: ["404 Not Found", "500 Internal Server Error", "200 OK", "301 Moved Permanently"], resposta: 2 }
      ],
      junior: [
          { pergunta: "Qual destes é um framework popular de Node.js para construir aplicações web?", opcoes: ["React", "Angular", "Express", "Vue"], resposta: 2 },
          { pergunta: "Qual é a principal função de um ORM (Object-Relational Mapping)?", opcoes: ["Otimizar a performance do servidor", "Traduzir código entre diferentes linguagens de backend", "Mapear tabelas do banco de dados para objetos no código", "Gerenciar a autenticação de usuários"], resposta: 2 }
      ],
      pleno: [
          { pergunta: "O que é 'stateless' no contexto de uma API REST?", opcoes: ["A API não tem documentação", "A API não consegue lidar com erros", "Cada requisição contém toda a informação necessária, sem depender de sessões no servidor", "A API está offline"], resposta: 2 }
      ],
      senior: []
  },
  devops: {
      estagiario: [
          { pergunta: "Para que serve o Git?", opcoes: ["Para escrever código", "Para testar o layout de sites", "Para versionar e controlar o histórico de arquivos", "Para otimizar imagens"], resposta: 2 },
      ],
      junior: [
          { pergunta: "O que é um 'container' Docker?", opcoes: ["Um tipo de servidor físico", "Uma máquina virtual pesada", "Um ambiente de software leve e portável para rodar aplicações", "Uma ferramenta de edição de código"], resposta: 2 }
      ],
      pleno: [
          { pergunta: "O que significa a sigla 'CI/CD'?", opcoes: ["Continuous Integration / Continuous Deployment", "Code Inspection / Code Delivery", "Central Intelligence / Central Dispatch", "Client Interaction / Customer Demos"], resposta: 0 }
      ],
      senior: []
  }
};