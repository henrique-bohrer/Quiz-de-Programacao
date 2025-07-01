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
            { pergunta: "Qual o principal objetivo de uma cláusula `WHERE` em SQL?", opcoes: ["Ordenar os resultados", "Filtrar os resultados", "Agrupar os resultados", "Juntar tabelas"], resposta: 1 },
            { pergunta: "Qual tipo de dado é mais apropriado para armazenar o preço de um produto, como 'R$ 19,99'?", opcoes: ["TEXT", "INTEGER", "BOOLEAN", "DECIMAL"], resposta: 3 },
            { pergunta: "O que significa a sigla SQL?", opcoes: ["Structured Question Language", "Simple Query Logic", "Structured Query Language", "Strong Question Logic"], resposta: 2 },
            { pergunta: "Qual das seguintes opções NÃO é um tipo de banco de dados?", opcoes: ["Relacional", "NoSQL", "Em memória", "Digital"], resposta: 3 }
        ],
        junior: [
            { pergunta: "Qual comando SQL é usado para selecionar dados de um banco de dados?", opcoes: ["SELECT", "UPDATE", "INSERT", "DELETE"], resposta: 0 },
            { pergunta: "Em Python, qual biblioteca é mais comumente usada para manipulação e análise de dados em DataFrames?", opcoes: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"], resposta: 2 },
            { pergunta: "O que significa a sigla 'ETL'?", opcoes: ["Execute, Test, Load", "Extract, Transform, Load", "Export, Transfer, Link", "Estimate, Track, Log"], resposta: 1 },
            { pergunta: "Qual a diferença entre `INNER JOIN` e `LEFT JOIN`?", opcoes: ["São iguais", "`INNER JOIN` retorna todas as linhas da tabela da esquerda", "`LEFT JOIN` retorna todas as linhas da tabela da esquerda, com as correspondentes da direita", "`INNER JOIN` é mais rápido"], resposta: 2 },
            { pergunta: "Para que serve um índice em um banco de dados?", opcoes: ["Para deletar dados", "Para criar um resumo da tabela", "Para acelerar a velocidade das consultas", "Para criptografar os dados"], resposta: 2 }
        ],
        pleno: [
             { pergunta: "Qual a principal diferença entre `UNION` e `UNION ALL` em SQL?", opcoes: ["UNION ALL é mais rápido pois não remove duplicatas", "UNION é mais rápido pois usa índices", "Não há diferença funcional", "UNION ALL só funciona em tabelas com o mesmo nome"], resposta: 0 },
             { pergunta: "O que é 'Data Warehousing'?", opcoes: ["O ato de deletar dados antigos", "Um sistema para armazenar dados de múltiplas fontes para análise", "A compressão de arquivos de dados", "Um tipo de backup de banco de dados"], resposta: 1 },
             { pergunta: "Qual a finalidade da cláusula `GROUP BY` em SQL?", opcoes: ["Agrupar linhas que têm os mesmos valores em colunas especificadas para funções de agregação", "Ordenar o resultado em ordem alfabética", "Deletar grupos de dados", "Criar uma nova tabela agrupada"], resposta: 0 },
             { pergunta: "O que é uma CTE (Common Table Expression) em SQL?", opcoes: ["Uma tabela permanente", "Um conjunto de resultados nomeado e temporário", "Um tipo de backup", "Uma função de agregação"], resposta: 1 },
             { pergunta: "Qual a diferença entre as cláusulas `WHERE` e `HAVING`?", opcoes: ["Nenhuma, são intercambiáveis", "`WHERE` filtra linhas antes da agregação, `HAVING` filtra grupos após a agregação", "`HAVING` é mais rápido que `WHERE`", "`WHERE` só aceita números"], resposta: 1 }
        ],
        senior: [
            { pergunta: "O que é a Terceira Forma Normal (3FN) em normalização de banco de dados?", opcoes: ["Garante que todos os atributos dependam apenas da chave primária composta", "Elimina a redundância de dados", "Exige que todos os atributos não-chave dependam exclusivamente da chave primária, sem dependências transitivas", "Permite apenas uma tabela por banco de dados"], resposta: 2 },
            { pergunta: "Em um contexto de Big Data, qual a principal diferença entre o processamento em Lote (Batch) e em Fluxo (Stream)?", opcoes: ["Stream é para dados pequenos, Batch para dados grandes", "Batch processa um grande volume de dados de uma vez, enquanto Stream processa dados continuamente, em tempo real", "Batch usa SQL, Stream usa Python", "Não há diferença, são sinônimos"], resposta: 1 },
            { pergunta: "O que são as propriedades ACID em um sistema de banco de dados?", opcoes: ["Um padrão de design de API", "Um conjunto de propriedades (Atomicidade, Consistência, Isolamento, Durabilidade) que garantem a confiabilidade das transações", "Um método de criptografia", "Um tipo de consulta SQL"], resposta: 1 },
            { pergunta: "Qual a principal diferença entre um Data Lake e um Data Warehouse?", opcoes: ["Data Lake armazena apenas dados estruturados", "Data Warehouse é mais barato", "Data Lake armazena dados brutos em seu formato nativo, enquanto um Data Warehouse armazena dados estruturados e processados", "Não há diferença"], resposta: 2 },
            { pergunta: "O que é o Teorema CAP (Consistência, Disponibilidade, Tolerância a Partição) em sistemas distribuídos?", opcoes: ["Um sistema pode ter no máximo duas dessas três garantias simultaneamente", "Um sistema precisa ter as três garantias para funcionar", "É um teorema sobre segurança de redes", "É um modelo para otimização de queries"], resposta: 0 }
        ]
    },
    frontend: {
        estagiario: [
            { pergunta: "O que significa a sigla HTML?", opcoes: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"], resposta: 0 },
            { pergunta: "Qual tag HTML é usada para criar um link?", opcoes: ["<link>", "<href>", "<a>", "<p>"], resposta: 2 },
            { pergunta: "Qual a finalidade do CSS em uma página web?", opcoes: ["Definir a estrutura e o conteúdo", "Controlar a interatividade e a lógica", "Definir a apresentação visual e o estilo", "Gerenciar o servidor e o banco de dados"], resposta: 2 },
            { pergunta: "Qual tag é usada para criar o maior título em HTML?", opcoes: ["<h6>", "<h1>", "<head>", "<title>"], resposta: 1 },
            { pergunta: "Qual propriedade CSS altera a cor de fundo de um elemento?", opcoes: ["color", "font-family", "background-color", "border-color"], resposta: 2 }
        ],
        junior: [
            { pergunta: "Qual propriedade do CSS é usada para alterar a cor do texto de um elemento?", opcoes: ["font-color", "text-color", "background-color", "color"], resposta: 3 },
            { pergunta: "O que o `box-sizing: border-box;` faz em CSS?", opcoes: ["Cria uma borda pontilhada", "Aumenta o tamanho da caixa", "Inclui padding e border no tamanho total do elemento", "Centraliza a caixa na tela"], resposta: 2 },
            { pergunta: "Qual atributo HTML é crucial para a acessibilidade de imagens, descrevendo seu conteúdo para leitores de tela?", opcoes: ["src", "title", "href", "alt"], resposta: 3 },
            { pergunta: "Qual a diferença entre `==` e `===` em JavaScript?", opcoes: ["Nenhuma, são iguais", "`===` compara valor e tipo, `==` faz conversão de tipo", "`==` é mais rápido", "`===` só funciona para números"], resposta: 1 },
            { pergunta: "Para que serve um `addEventListener` em JavaScript?", opcoes: ["Para criar variáveis", "Para importar bibliotecas", "Para executar uma função quando um evento específico ocorre em um elemento", "Para estilizar um elemento"], resposta: 2 }
        ],
        pleno: [
            { pergunta: "No JavaScript, qual a principal diferença entre `let` e `const`?", opcoes: ["`let` é para números, `const` é para textos", "`const` não pode ter seu valor reatribuído", "`let` é global, `const` é local", "Não há diferença"], resposta: 1 },
            { pergunta: "O que é o 'DOM' no contexto do desenvolvimento web?", opcoes: ["Um modelo de design de sites", "Uma representação em árvore do documento HTML", "Um servidor de arquivos", "Uma linguagem de estilização"], resposta: 1 },
            { pergunta: "O que `async/await` faz em JavaScript?", opcoes: ["Executa o código de forma síncrona, linha por linha", "Permite escrever código assíncrono que parece síncrono, pausando e resumindo a execução da função", "Declara uma variável constante que não pode ser mudada", "Cria um loop que se repete de forma assíncrona"], resposta: 1 },
            { pergunta: "O que é uma 'Promise' em JavaScript?", opcoes: ["Uma garantia de que o código não terá bugs", "Um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona", "Uma função que só pode ser executada uma vez", "Uma variável que não pode ser modificada"], resposta: 1 },
            { pergunta: "Qual o propósito do `Array.prototype.map()`?", opcoes: ["Iterar sobre um array sem retornar valor", "Filtrar os elementos de um array", "Criar um novo array com os resultados da chamada de uma função para cada elemento do array", "Verificar se ao menos um elemento do array passa em um teste"], resposta: 2 }
        ],
        senior: [
            { pergunta: "O que é 'Code Splitting' em uma aplicação frontend moderna (com Webpack/Vite)?", opcoes: ["Dividir o código em vários arquivos para organização", "Escrever o código em duas linguagens diferentes", "Dividir o código em 'pedaços' menores que são carregados sob demanda, melhorando o tempo de carregamento inicial", "Comentar todas as seções do código"], resposta: 2 },
            { pergunta: "Qual métrica do Core Web Vitals mede a estabilidade visual de uma página, prevenindo mudanças de layout inesperadas?", opcoes: ["LCP (Largest Contentful Paint)", "FID (First Input Delay)", "CLS (Cumulative Layout Shift)", "FCP (First Contentful Paint)"], resposta: 2 },
            { pergunta: "O que é 'Server-Side Rendering' (SSR) e qual sua principal vantagem?", opcoes: ["Renderizar a página no servidor antes de enviá-la ao cliente, melhorando o SEO e o tempo de primeira pintura", "Uma técnica para carregar vídeos mais rápido", "Renderizar toda a aplicação apenas no lado do cliente", "Um método de segurança para APIs"], resposta: 0 },
            { pergunta: "O que é 'Tree Shaking' em um contexto de build de frontend?", opcoes: ["Uma animação de CSS", "O processo de eliminar código não utilizado (dead-code) do bundle final", "Uma forma de organizar a estrutura de pastas", "Uma técnica de debug"], resposta: 1 },
            { pergunta: "Qual a diferença fundamental entre `null` e `undefined` em JavaScript?", opcoes: ["São idênticos", "`null` é um valor de atribuição intencional (ausência de valor), `undefined` significa que uma variável não foi inicializada", "`null` é um erro, `undefined` não", "`null` é 0, `undefined` é NaN"], resposta: 1 }
        ]
    },
    backend: {
        estagiario: [
            { pergunta: "O que é uma API?", opcoes: ["Um aplicativo de celular", "Uma interface para dois sistemas conversarem", "Um tipo de banco de dados", "Uma linguagem de programação"], resposta: 1 },
            { pergunta: "Qual status HTTP indica que uma requisição foi bem-sucedida?", opcoes: ["404 Not Found", "500 Internal Server Error", "200 OK", "301 Moved Permanently"], resposta: 2 },
            { pergunta: "Qual é o papel principal de um servidor web?", opcoes: ["Apenas exibir vídeos e imagens", "Armazenar senhas de Wi-Fi", "Processar requisições de clientes e enviar respostas", "Acelerar a velocidade da internet do usuário"], resposta: 2 },
            { pergunta: "O que 'localhost' geralmente se refere?", opcoes: ["Ao servidor do Google", "A um servidor remoto na nuvem", "À sua própria máquina local", "A um endereço de site inválido"], resposta: 2 },
            { pergunta: "O que é uma 'rota' em uma aplicação web backend?", opcoes: ["O caminho físico dos cabos de rede", "Uma URL que a aplicação sabe como responder", "Uma função para calcular distâncias", "Um tipo de variável"], resposta: 1 }
        ],
        junior: [
            { pergunta: "Qual destes é um framework popular de Node.js para construir aplicações web?", opcoes: ["React", "Angular", "Express", "Vue"], resposta: 2 },
            { pergunta: "Qual é a principal função de um ORM (Object-Relational Mapping)?", opcoes: ["Otimizar a performance do servidor", "Traduzir código entre diferentes linguagens de backend", "Mapear tabelas do banco de dados para objetos no código", "Gerenciar a autenticação de usuários"], resposta: 2 },
            { pergunta: "Qual tipo de banco de dados é conhecido por sua flexibilidade de esquema e uso de documentos no formato JSON?", opcoes: ["SQL", "Relacional", "NoSQL", "Gráfico"], resposta: 2 },
            { pergunta: "Para que serve o `npm` (Node Package Manager)?", opcoes: ["Para monitorar a performance do Node.js", "Para gerenciar as dependências e pacotes de um projeto JavaScript", "Para escrever código Node.js", "Para criar banco de dados"], resposta: 1 },
            { pergunta: "O que são 'Variáveis de Ambiente'?", opcoes: ["Variáveis globais do JavaScript", "Variáveis configuradas fora do código da aplicação, para dados sensíveis ou configurações", "Variáveis que medem a temperatura do servidor", "Variáveis que só existem no browser"], resposta: 1 }
        ],
        pleno: [
            { pergunta: "O que é 'stateless' (sem estado) no contexto de uma API REST?", opcoes: ["A API não tem documentação", "A API não consegue lidar com erros", "Cada requisição contém toda a informação necessária, sem depender de sessões no servidor", "A API está offline"], resposta: 2 },
            { pergunta: "O que é um JWT (JSON Web Token)?", opcoes: ["Uma biblioteca JavaScript para criar interfaces", "Uma forma de estilizar arquivos JSON", "Um padrão aberto para transmitir informações seguras entre partes como um objeto JSON", "Um tipo de banco de dados"], resposta: 2 },
            { pergunta: "Qual a diferença entre Autenticação e Autorização?", opcoes: ["São a mesma coisa", "Autenticação verifica quem você é, Autorização verifica o que você pode fazer", "Autorização vem antes da Autenticação", "Autenticação é para usuários, Autorização para sistemas"], resposta: 1 },
            { pergunta: "Para que serve um sistema de 'caching' no backend?", opcoes: ["Para registrar logs de erro", "Para armazenar temporariamente dados frequentemente acessados e acelerar respostas", "Para autenticar usuários", "Para fazer o deploy da aplicação"], resposta: 1 },
            { pergunta: "O que é o padrão de arquitetura 'Singleton'?", opcoes: ["Permitir que apenas um usuário acesse o sistema por vez", "Um padrão que restringe a instanciação de uma classe a um único objeto", "Um método para escrever código em uma única linha", "Uma forma de conectar a um único banco de dados"], resposta: 1 }
        ],
        senior: [
            { pergunta: "O que caracteriza uma arquitetura de 'Microsserviços'?", opcoes: ["Um único grande aplicativo que faz tudo (monólito)", "Um conjunto de pequenos serviços independentes que se comunicam por APIs", "Uma forma de escrever código em arquivos menores", "Um padrão de design para interfaces de usuário"], resposta: 1 },
            { pergunta: "O que é um 'Load Balancer' (Balanceador de Carga)?", opcoes: ["Uma ferramenta de segurança que bloqueia tráfego", "Um dispositivo que aumenta a memória do servidor", "Uma ferramenta que distribui o tráfego de rede entre múltiplos servidores para melhorar a performance e a confiabilidade", "Um software para medir a velocidade da rede"], resposta: 2 },
            { pergunta: "O que é o Teorema CAP (Consistência, Disponibilidade, Tolerância a Partição) em sistemas distribuídos?", opcoes: ["Um sistema pode ter no máximo duas dessas três garantias simultaneamente", "Um sistema precisa ter as três garantias para funcionar", "É um teorema sobre segurança de redes", "É um modelo para otimização de queries"], resposta: 0 },
            { pergunta: "Para que servem 'Message Queues' (Filas de Mensagens) como RabbitMQ ou Kafka?", opcoes: ["Para armazenar o chat de usuários", "Para permitir a comunicação assíncrona e desacoplada entre diferentes serviços", "Para criar backups do banco de dados", "Para gerenciar o deploy de aplicações"], resposta: 1 },
            { pergunta: "O que é 'Database Sharding'?", opcoes: ["Um tipo de criptografia de banco de dados", "O processo de dividir um banco de dados grande em partes menores e mais gerenciáveis (shards)", "Uma técnica de backup", "Uma forma de renomear tabelas"], resposta: 1 }
        ]
    },
    devops: {
        estagiario: [
            { pergunta: "Para que serve o Git?", opcoes: ["Para escrever código", "Para testar o layout de sites", "Para versionar e controlar o histórico de arquivos", "Para otimizar imagens"], resposta: 2 },
            { pergunta: "O que é um 'deploy' no contexto de software?", opcoes: ["Desenhar a interface do usuário", "Escrever a documentação do projeto", "O processo de publicar uma nova versão de um software para os usuários", "Corrigir um bug em desenvolvimento"], resposta: 2 },
            { pergunta: "O que é um 'servidor'?", opcoes: ["Um computador ou programa que fornece serviços a outros computadores (clientes)", "O computador pessoal de um desenvolvedor", "Um tipo de antivírus", "Um cabo de rede"], resposta: 0 },
            { pergunta: "O que significa 'a nuvem' (the cloud) em computação?", opcoes: ["A internet como um todo", "Servidores, bancos de dados e serviços acessíveis pela internet", "Um sistema de armazenamento sem fio", "O clima da Califórnia"], resposta: 1 },
            { pergunta: "Qual o propósito de um endereço de IP?", opcoes: ["Identificar um dispositivo em uma rede", "O nome de um website", "Uma senha de segurança", "Um tipo de processador"], resposta: 0 }
        ],
        junior: [
            { pergunta: "O que é um 'container' Docker?", opcoes: ["Um tipo de servidor físico muito grande", "Uma máquina virtual pesada e lenta", "Um ambiente de software leve, portável e isolado para rodar aplicações de forma consistente", "Uma ferramenta de edição de código exclusiva para Linux"], resposta: 2 },
            { pergunta: "O que é 'Infraestrutura como Código' (IaC)?", opcoes: ["A documentação em texto da infraestrutura do servidor", "Usar linguagens de programação para provisionar e gerenciar a infraestrutura de TI automaticamente", "Um tipo de hardware de rede", "Um antivírus para servidores"], resposta: 1 },
            { pergunta: "O que é um 'repositório' no contexto do Git?", opcoes: ["Um tipo de servidor", "Um banco de dados de código", "Uma pasta que contém todos os arquivos e o histórico de um projeto", "O perfil de um usuário no GitHub"], resposta: 2 },
            { pergunta: "Para que serve um arquivo YAML?", opcoes: ["Para estilizar páginas web, como o CSS", "Para escrever lógica de programação, como o JavaScript", "Para configuração de dados de forma legível para humanos", "Para criar imagens e vídeos"], resposta: 2 },
            { pergunta: "O que é o 'build' de uma aplicação?", opcoes: ["O processo de planejar as funcionalidades", "O processo de converter o código-fonte em um artefato executável", "A reunião diária da equipe", "O teste manual do software"], resposta: 1 }
        ],
        pleno: [
            { pergunta: "O que significa a sigla 'CI/CD'?", opcoes: ["Continuous Integration / Continuous Deployment", "Code Inspection / Code Delivery", "Central Intelligence / Central Dispatch", "Client Interaction / Customer Demos"], resposta: 0 },
            { pergunta: "Em CI/CD, qual é a principal função da 'Integração Contínua' (CI)?", opcoes: ["Fazer o deploy do código diretamente para produção", "Juntar e testar o código de vários desenvolvedores em um repositório central de forma automática e frequente", "Escrever os testes unitários do sistema", "Monitorar a performance do servidor após o deploy"], resposta: 1 },
            { pergunta: "O que é um 'Dockerfile'?", opcoes: ["Um container Docker em execução", "Um script para instalar o Docker", "Um arquivo de texto com instruções para construir uma imagem Docker", "A documentação oficial do Docker"], resposta: 2 },
            { pergunta: "Qual o objetivo principal de uma ferramenta de monitoramento como Prometheus ou Zabbix?", opcoes: ["Escrever código mais rápido", "Fazer o deploy da aplicação", "Coletar e exibir métricas sobre a saúde e performance de um sistema", "Gerenciar senhas"], resposta: 2 },
            { pergunta: "O que é um 'rollback' em um processo de deploy?", opcoes: ["Aprovar o deploy", "Reverter a aplicação para uma versão anterior estável após uma falha", "Pausar o deploy temporariamente", "Testar o deploy em um ambiente separado"], resposta: 1 }
        ],
        senior: [
            { pergunta: "O que é 'Observabilidade' (Observability) em DevOps e como se diferencia de 'Monitoramento'?", opcoes: ["São a mesma coisa", "Monitoramento coleta dados pré-definidos, Observabilidade permite fazer novas perguntas sobre o sistema a partir dos dados coletados", "Observabilidade é sobre segurança, Monitoramento é sobre performance", "Monitoramento é para hardware, Observabilidade para software"], resposta: 1 },
            { pergunta: "O que é 'DevSecOps'?", opcoes: ["Uma equipe de desenvolvedores focada apenas em segurança", "A prática de integrar a segurança em todas as fases do ciclo de vida DevOps", "Uma ferramenta de automação de segurança", "Um tipo de certificação de segurança para redes"], resposta: 1 },
            { pergunta: "Para que serve uma ferramenta de orquestração de containers como o Kubernetes (K8s)?", opcoes: ["Para construir imagens de container", "Para automatizar o deploy, o escalonamento e a gestão de aplicações em containers", "Para escrever o código da aplicação", "Para armazenar os containers"], resposta: 1 },
            { pergunta: "O que é um 'post-mortem' de incidente?", opcoes: ["Uma reunião para culpar quem causou o problema", "O processo de desligar um servidor", "Uma análise detalhada e sem culpa de um incidente para aprender e prevenir futuras ocorrências", "Um relatório de performance do sistema"], resposta: 2 },
            { pergunta: "O que é um 'Service Mesh' como Istio ou Linkerd?", opcoes: ["A infraestrutura de rede física do data center", "Uma camada de infraestrutura dedicada para tornar a comunicação entre serviços mais segura, confiável e observável", "Um tipo de firewall de rede", "Uma ferramenta para desenhar a arquitetura de microsserviços"], resposta: 1 }
        ]
    }
};