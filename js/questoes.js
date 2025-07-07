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
            { pergunta: "O que significa a sigla SQL?", opcoes: ["Structured Question Language", "Simple Query Logic", "Structured Query Language", "Strong Question Logic"], resposta: 2 },
            { pergunta: "Qual o principal objetivo de uma cláusula `WHERE` em SQL?", opcoes: ["Ordenar os resultados", "Filtrar os resultados", "Agrupar os resultados", "Juntar tabelas"], resposta: 1 },
            { pergunta: "Em uma tabela de 'Clientes', o que a 'chave primária' geralmente representa?", opcoes: ["O nome do cliente", "O endereço do cliente", "Um identificador único para cada cliente", "A idade do cliente"], resposta: 2 },
            { pergunta: "Qual tipo de dado é mais apropriado para armazenar uma data de nascimento?", opcoes: ["TEXT", "INTEGER", "BOOLEAN", "DATE"], resposta: 3 },
            { pergunta: "Qual das seguintes opções NÃO é um tipo de banco de dados?", opcoes: ["Relacional", "NoSQL", "Em memória", "Digital"], resposta: 3 }
        ],
        junior: [
            { pergunta: "Qual comando SQL é usado para juntar dados de duas ou mais tabelas?", opcoes: ["MERGE", "COMBINE", "JOIN", "CONNECT"], resposta: 2 },
            { pergunta: "Em Python, qual biblioteca é mais comumente usada para manipulação e análise de dados em DataFrames?", opcoes: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"], resposta: 2 },
            { pergunta: "O que significa a sigla 'ETL'?", opcoes: ["Execute, Test, Load", "Extract, Transform, Load", "Export, Transfer, Link", "Estimate, Track, Log"], resposta: 1 },
            { pergunta: "Qual a diferença entre `INNER JOIN` e `LEFT JOIN`?", opcoes: ["São iguais", "`INNER JOIN` retorna todas as linhas da tabela da esquerda", "`LEFT JOIN` retorna todas as linhas da tabela da esquerda, com as correspondentes da direita", "`INNER JOIN` é mais rápido"], resposta: 2 },
            { pergunta: "Para que serve um índice em um banco de dados?", opcoes: ["Para deletar dados", "Para criar um resumo da tabela", "Para acelerar a velocidade das consultas", "Para criptografar os dados"], resposta: 2 }
        ],
        pleno: [
             { pergunta: "Quando você usaria uma `Window Function` como `LAG()` ou `LEAD()` em SQL?", opcoes: ["Para deletar linhas", "Para calcular valores baseados em um conjunto de linhas relacionadas à linha atual", "Apenas para ordenar dados", "Para criar novas tabelas"], resposta: 1 },
             { pergunta: "O que é 'Data Warehousing'?", opcoes: ["O ato de deletar dados antigos", "Um sistema centralizado que armazena dados de múltiplas fontes para facilitar a análise e a geração de relatórios", "A compressão de arquivos de dados", "Um tipo de backup de banco de dados"], resposta: 1 },
             { pergunta: "Qual a finalidade da cláusula `GROUP BY` em SQL?", opcoes: ["Agrupar linhas com os mesmos valores em colunas especificadas para executar funções de agregação", "Ordenar o resultado em ordem alfabética", "Deletar grupos de dados", "Criar uma nova tabela agrupada"], resposta: 0 },
             { pergunta: "O que é uma CTE (Common Table Expression) em SQL?", opcoes: ["Uma tabela física permanente", "Um conjunto de resultados nomeado e temporário, usado dentro de uma única query", "Um tipo de backup automático", "Uma função de agregação como `SUM()`"], resposta: 1 },
             { pergunta: "Qual a diferença entre as cláusulas `WHERE` e `HAVING`?", opcoes: ["Nenhuma, são intercambiáveis", "`WHERE` filtra linhas antes da agregação, `HAVING` filtra grupos após a agregação", "`HAVING` é sempre mais rápido que `WHERE`", "`WHERE` só aceita valores numéricos"], resposta: 1 }
        ],
        senior: [
            { pergunta: "Explique um cenário onde a desnormalização intencional seria benéfica.", opcoes: ["Para garantir a integridade dos dados em um sistema transacional", "Para melhorar a performance de leitura em um Data Warehouse, reduzindo o número de `JOINs`", "Para reduzir o espaço de armazenamento do banco de dados", "Para simplificar a escrita de dados"], resposta: 1 },
            { pergunta: "Em um contexto de Big Data, qual a principal diferença entre o processamento em Lote (Batch) e em Fluxo (Stream)?", opcoes: ["Stream é para dados pequenos, Batch para dados grandes", "Batch processa um grande volume de dados de uma vez em intervalos programados, enquanto Stream processa dados continuamente, em tempo real", "Batch usa SQL, Stream usa Python", "Não há diferença, são sinônimos"], resposta: 1 },
            { pergunta: "O que são as propriedades ACID em um sistema de banco de dados?", opcoes: ["Um padrão de design de API", "Um conjunto de propriedades (Atomicidade, Consistência, Isolamento, Durabilidade) que garantem a confiabilidade das transações", "Um método de criptografia", "Um tipo de consulta SQL"], resposta: 1 },
            { pergunta: "Qual a principal diferença entre um Data Lake e um Data Warehouse?", opcoes: ["Data Lake armazena apenas dados estruturados", "Data Warehouse é mais barato", "Data Lake armazena dados brutos em seu formato nativo, enquanto um Data Warehouse armazena dados estruturados e processados", "Não há diferença"], resposta: 2 },
            { pergunta: "O que é o Teorema CAP em sistemas distribuídos e o que ele implica?", opcoes: ["Que um sistema pode ter no máximo duas dessas três garantias simultaneamente: Consistência, Disponibilidade e Tolerância a Partição", "Que um sistema precisa ter as três garantias para funcionar", "É um teorema sobre segurança de redes", "É um modelo para otimização de queries SQL"], resposta: 0 }
        ]
    },
    frontend: {
        estagiario: [
            { pergunta: "Qual tag HTML é usada para criar o parágrafo mais básico?", opcoes: ["<div>", "<span>", "<p>", "<section>"], resposta: 2 },
            { pergunta: "Qual tag HTML é usada para criar um link?", opcoes: ["<link>", "<href>", "<a>", "<p>"], resposta: 2 },
            { pergunta: "Qual a finalidade do CSS em uma página web?", opcoes: ["Definir a estrutura e o conteúdo", "Controlar a interatividade e a lógica", "Definir a apresentação visual e o estilo", "Gerenciar o servidor e o banco de dados"], resposta: 2 },
            { pergunta: "Qual tag é usada para criar o maior título em HTML?", opcoes: ["<h6>", "<h1>", "<head>", "<title>"], resposta: 1 },
            { pergunta: "Qual propriedade CSS altera a cor de fundo de um elemento?", opcoes: ["color", "font-family", "background-color", "border-color"], resposta: 2 }
        ],
        junior: [
            { pergunta: "Qual seletor CSS seleciona um elemento pela sua `id`?", opcoes: [".", "#", "$", "@"], resposta: 1 },
            { pergunta: "O que o `box-sizing: border-box;` faz em CSS?", opcoes: ["Cria uma borda pontilhada", "Aumenta o tamanho da caixa", "Faz com que `padding` e `border` sejam incluídos no cálculo da largura e altura total do elemento", "Centraliza a caixa na tela"], resposta: 2 },
            { pergunta: "Qual atributo HTML é crucial para a acessibilidade de imagens, descrevendo seu conteúdo para leitores de tela?", opcoes: ["src", "title", "href", "alt"], resposta: 3 },
            { pergunta: "Qual a diferença entre `==` e `===` em JavaScript?", opcoes: ["Nenhuma, são iguais", "`===` compara valor e tipo, `==` faz conversão de tipo antes de comparar", "`==` é mais rápido", "`===` só funciona para números"], resposta: 1 },
            { pergunta: "Para que serve um `addEventListener` em JavaScript?", opcoes: ["Para criar variáveis", "Para importar bibliotecas", "Para executar uma função quando um evento específico (como um clique) ocorre em um elemento", "Para estilizar um elemento"], resposta: 2 }
        ],
        pleno: [
            { pergunta: "Explique o 'event loop' do JavaScript em termos simples.", opcoes: ["É um loop `for` infinito", "É uma fila que processa callbacks de funções assíncronas (como `setTimeout`) e eventos do usuário, garantindo que o JS não 'trave'", "É uma função para escutar eventos de teclado", "É um padrão de design de componentes"], resposta: 1 },
            { pergunta: "O que é o 'DOM' no contexto do desenvolvimento web?", opcoes: ["Um modelo de design de sites", "Uma representação em árvore do documento HTML que permite ao JavaScript interagir com os elementos da página", "Um servidor de arquivos", "Uma linguagem de estilização"], resposta: 1 },
            { pergunta: "O que `async/await` faz em JavaScript?", opcoes: ["Executa o código de forma síncrona, linha por linha", "É 'açúcar sintático' sobre Promises, permitindo escrever código assíncrono que parece síncrono", "Declara uma variável constante que não pode ser mudada", "Cria um loop que se repete de forma assíncrona"], resposta: 1 },
            { pergunta: "O que é uma 'Promise' em JavaScript?", opcoes: ["Uma garantia de que o código não terá bugs", "Um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona", "Uma função que só pode ser executada uma vez", "Uma variável que não pode ser modificada"], resposta: 1 },
            { pergunta: "Qual o propósito do `Array.prototype.map()`?", opcoes: ["Iterar sobre um array sem retornar valor", "Filtrar os elementos de um array", "Criar um novo array com os resultados da chamada de uma função para cada elemento do array original", "Verificar se ao menos um elemento do array passa em um teste"], resposta: 2 }
        ],
        senior: [
            { pergunta: "Qual a diferença entre `React.memo` e o hook `useMemo`?", opcoes: ["São idênticos", "`memo` previne a re-renderização de um componente se suas `props` não mudaram, `useMemo` memoriza o resultado de um cálculo pesado entre renderizações", "`useMemo` é para componentes de classe, `memo` para componentes funcionais", "`memo` é para funções, `useMemo` para componentes"], resposta: 1 },
            { pergunta: "Qual métrica do Core Web Vitals mede a estabilidade visual de uma página, prevenindo mudanças de layout inesperadas?", opcoes: ["LCP (Largest Contentful Paint)", "FID (First Input Delay)", "CLS (Cumulative Layout Shift)", "FCP (First Contentful Paint)"], resposta: 2 },
            { pergunta: "O que é 'Server-Side Rendering' (SSR) e qual sua principal vantagem para SEO?", opcoes: ["Renderizar a página no servidor antes de enviá-la ao cliente, entregando um HTML completo que os buscadores conseguem indexar facilmente", "Uma técnica para carregar vídeos mais rápido", "Renderizar toda a aplicação apenas no lado do cliente", "Um método de segurança para APIs"], resposta: 0 },
            { pergunta: "O que é 'Tree Shaking' em um contexto de build de frontend?", opcoes: ["Uma animação de CSS", "O processo de eliminar código não utilizado (dead-code) do bundle final para reduzir seu tamanho", "Uma forma de organizar a estrutura de pastas", "Uma técnica de debug para encontrar erros em árvores DOM"], resposta: 1 },
            { pergunta: "Qual a diferença fundamental entre `null` e `undefined` em JavaScript?", opcoes: ["São idênticos", "`null` é um valor de atribuição intencional (ausência de valor), `undefined` significa que uma variável foi declarada mas não teve valor atribuído", "`null` é um erro, `undefined` não", "`null` é 0, `undefined` é NaN"], resposta: 1 }
        ]
    },
    backend: {
        estagiario: [
            { pergunta: "Qual o significado de HTTP?", opcoes: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Protocol", "HyperText Transfer Page"], resposta: 0 },
            { pergunta: "Qual status HTTP indica um erro de 'Não Encontrado'?", opcoes: ["200", "301", "404", "500"], resposta: 2 },
            { pergunta: "Qual é o papel principal de um servidor web?", opcoes: ["Apenas exibir vídeos e imagens", "Armazenar senhas de Wi-Fi", "Processar requisições de clientes e enviar respostas", "Acelerar a velocidade da internet do usuário"], resposta: 2 },
            { pergunta: "O que 'localhost' geralmente se refere?", opcoes: ["Ao servidor do Google", "A um servidor remoto na nuvem", "À sua própria máquina local", "A um endereço de site inválido"], resposta: 2 },
            { pergunta: "O que é uma 'rota' em uma aplicação web backend?", opcoes: ["O caminho físico dos cabos de rede", "Um endpoint (URL) que a aplicação sabe como responder", "Uma função para calcular distâncias", "Um tipo de variável de ambiente"], resposta: 1 }
        ],
        junior: [
            { pergunta: "O que é 'Middleware' no contexto de frameworks como o Express?", opcoes: ["O banco de dados da aplicação", "Funções que têm acesso aos objetos de requisição (req), resposta (res), e à próxima função no ciclo de requisição-resposta", "O frontend da aplicação", "Uma ferramenta de deploy"], resposta: 1 },
            { pergunta: "Qual é a principal função de um ORM (Object-Relational Mapping)?", opcoes: ["Otimizar a performance do servidor", "Traduzir código entre diferentes linguagens de backend", "Mapear tabelas do banco de dados para objetos no código, abstraindo as queries SQL", "Gerenciar a autenticação de usuários"], resposta: 2 },
            { pergunta: "Qual tipo de banco de dados é conhecido por sua flexibilidade de esquema e uso de documentos no formato JSON?", opcoes: ["SQL", "Relacional", "NoSQL", "Gráfico"], resposta: 2 },
            { pergunta: "Para que serve o `npm` (Node Package Manager)?", opcoes: ["Para monitorar a performance do Node.js", "Para gerenciar as dependências e pacotes de um projeto JavaScript", "Para escrever código Node.js", "Para criar banco de dados"], resposta: 1 },
            { pergunta: "O que são 'Variáveis de Ambiente' e por que são importantes?", opcoes: ["Variáveis globais do JavaScript", "Variáveis configuradas fora do código da aplicação, ideais para armazenar dados sensíveis (chaves de API) ou configurações de ambiente", "Variáveis que medem a temperatura do servidor", "Variáveis que só existem no browser"], resposta: 1 }
        ],
        pleno: [
            { pergunta: "O que é 'stateless' (sem estado) no contexto de uma API REST?", opcoes: ["A API não tem documentação", "A API não consegue lidar com erros", "Cada requisição do cliente contém toda a informação necessária para ser executada, sem que o servidor precise guardar o estado do cliente entre requisições", "A API está offline"], resposta: 2 },
            { pergunta: "O que é um JWT (JSON Web Token)?", opcoes: ["Uma biblioteca JavaScript para criar interfaces", "Uma forma de estilizar arquivos JSON", "Um padrão aberto para transmitir informações seguras (claims) entre partes como um objeto JSON assinado digitalmente", "Um tipo de banco de dados em memória"], resposta: 2 },
            { pergunta: "Qual a diferença entre Autenticação e Autorização?", opcoes: ["São a mesma coisa", "Autenticação é o processo de verificar quem você é. Autorização é o processo de verificar o que você tem permissão para fazer.", "Autorização vem antes da Autenticação", "Autenticação é para usuários, Autorização para sistemas"], resposta: 1 },
            { pergunta: "Para que serve um sistema de 'caching' no backend?", opcoes: ["Para registrar logs de erro", "Para armazenar temporariamente dados frequentemente acessados e acelerar respostas, diminuindo a carga no banco de dados", "Para autenticar usuários de forma mais rápida", "Para fazer o deploy da aplicação em cache"], resposta: 1 },
            { pergunta: "O que é o padrão de arquitetura 'Singleton'?", opcoes: ["Permitir que apenas um usuário acesse o sistema por vez", "Um padrão de design que restringe a instanciação de uma classe a um único objeto em toda a aplicação", "Um método para escrever código em uma única linha", "Uma forma de conectar a um único banco de dados por vez"], resposta: 1 }
        ],
        senior: [
            { pergunta: "Descreva o fluxo de uma autenticação OAuth 2.0 (Authorization Code Flow).", opcoes: ["O usuário envia senha para a API, que retorna um token", "O usuário autoriza um app terceiro, que recebe um código, troca esse código por um token de acesso e usa o token para acessar a API em nome do usuário", "O app gera um token aleatório e envia ao servidor", "É um sistema baseado em senhas de uso único"], resposta: 1 },
            { pergunta: "Quais são as diferenças entre as estratégias de balanceamento de carga Round Robin, Least Connections e IP Hash?", opcoes: ["Não há diferença, todas distribuem o tráfego igualmente", "Round Robin distribui sequencialmente, Least Connections para o servidor com menos conexões, e IP Hash direciona requisições do mesmo IP para o mesmo servidor", "IP Hash é para segurança, os outros para performance", "Round Robin é o mais lento de todos"], resposta: 1 },
            { pergunta: "O que é o Teorema CAP (Consistência, Disponibilidade, Tolerância a Partição) em sistemas distribuídos?", opcoes: ["Um sistema pode ter no máximo duas dessas três garantias simultaneamente", "Um sistema precisa ter as três garantias para funcionar", "É um teorema sobre segurança de redes", "É um modelo para otimização de queries SQL"], resposta: 0 },
            { pergunta: "Para que servem 'Message Queues' (Filas de Mensagens) como RabbitMQ ou Kafka?", opcoes: ["Para armazenar o chat de usuários", "Para permitir a comunicação assíncrona e desacoplada entre diferentes serviços, aumentando a resiliência e escalabilidade", "Para criar backups do banco de dados em tempo real", "Para gerenciar o deploy de aplicações em fila"], resposta: 1 },
            { pergunta: "O que é 'Database Sharding'?", opcoes: ["Um tipo de criptografia de banco de dados", "O processo de particionar horizontalmente um banco de dados grande em partes menores e mais gerenciáveis (shards)", "Uma técnica de backup incremental", "Uma forma de renomear tabelas sem downtime"], resposta: 1 }
        ]
    },
    devops: {
        estagiario: [
            { pergunta: "Para que serve o Git?", opcoes: ["Para escrever código", "Para testar o layout de sites", "Para versionar e controlar o histórico de alterações em arquivos de código", "Para otimizar imagens para a web"], resposta: 2 },
            { pergunta: "O que é um 'deploy' no contexto de software?", opcoes: ["Desenhar a interface do usuário", "Escrever a documentação do projeto", "O processo de publicar uma nova versão de um software em um ambiente (produção, homologação, etc.)", "Corrigir um bug em desenvolvimento"], resposta: 2 },
            { pergunta: "O que é um 'servidor'?", opcoes: ["Um computador ou programa que fornece serviços a outros computadores (clientes)", "O computador pessoal de um desenvolvedor", "Um tipo de antivírus de rede", "Um cabo de rede de alta velocidade"], resposta: 0 },
            { pergunta: "O que significa 'a nuvem' (the cloud) em computação?", opcoes: ["A internet como um todo", "Servidores, bancos de dados, armazenamento e serviços de computação acessíveis pela internet", "Um sistema de armazenamento sem fio para backups pessoais", "O clima da Califórnia"], resposta: 1 },
            { pergunta: "Qual o propósito de um endereço de IP?", opcoes: ["Identificar um dispositivo de forma única em uma rede", "O nome de um website (ex: google.com)", "Uma senha de segurança para redes Wi-Fi", "Um tipo de processador de rede"], resposta: 0 }
        ],
        junior: [
            { pergunta: "O que é um 'container' Docker?", opcoes: ["Um tipo de servidor físico muito grande", "Uma máquina virtual pesada e lenta", "Um ambiente de software leve, portável e isolado que empacota uma aplicação e suas dependências", "Uma ferramenta de edição de código exclusiva para Linux"], resposta: 2 },
            { pergunta: "O que é 'Infraestrutura como Código' (IaC)?", opcoes: ["A documentação em texto da infraestrutura do servidor", "A prática de gerenciar e provisionar infraestrutura de TI através de arquivos de configuração legíveis por máquina", "Um tipo de hardware de rede programável", "Um antivírus para servidores na nuvem"], resposta: 1 },
            { pergunta: "O que é um 'repositório' no contexto do Git?", opcoes: ["Um tipo de servidor de arquivos", "Um banco de dados de código fonte", "Uma pasta que contém todos os arquivos e o histórico de um projeto rastreado pelo Git", "O perfil de um usuário no GitHub"], resposta: 2 },
            { pergunta: "Para que serve um arquivo YAML?", opcoes: ["Para estilizar páginas web, como o CSS", "Para escrever lógica de programação, como o JavaScript", "Para armazenar dados de configuração de forma legível para humanos, muito usado em arquivos de configuração de DevOps", "Para criar imagens e vídeos"], resposta: 2 },
            { pergunta: "O que é o 'build' de uma aplicação?", opcoes: ["O processo de planejar as funcionalidades futuras", "O processo automatizado de converter o código-fonte em um artefato executável ou publicável", "A reunião diária da equipe de desenvolvimento", "O teste manual do software por um usuário final"], resposta: 1 }
        ],
        pleno: [
            { pergunta: "O que significa a sigla 'CI/CD'?", opcoes: ["Continuous Integration / Continuous Deployment (ou Delivery)", "Code Inspection / Code Delivery", "Central Intelligence / Central Dispatch", "Client Interaction / Customer Demos"], resposta: 0 },
            { pergunta: "Em CI/CD, qual é a principal função da 'Integração Contínua' (CI)?", opcoes: ["Fazer o deploy do código diretamente para produção", "Automatizar a mesclagem e o teste do código de vários desenvolvedores em um repositório central", "Escrever os testes unitários do sistema", "Monitorar a performance do servidor após o deploy"], resposta: 1 },
            { pergunta: "O que é um 'Dockerfile'?", opcoes: ["Um container Docker em execução", "Um script para instalar o Docker em um servidor", "Um arquivo de texto com uma sequência de comandos para construir uma imagem Docker", "A documentação oficial do Docker em formato de texto"], resposta: 2 },
            { pergunta: "Qual o objetivo principal de uma ferramenta de monitoramento como Prometheus ou Zabbix?", opcoes: ["Escrever código mais rápido", "Fazer o deploy da aplicação", "Coletar e exibir métricas sobre a saúde e performance de um sistema para identificar problemas", "Gerenciar senhas e segredos da aplicação"], resposta: 2 },
            { pergunta: "O que é um 'rollback' em um processo de deploy?", opcoes: ["Aprovar o deploy para o próximo ambiente", "Reverter a aplicação para uma versão anterior estável, geralmente após a detecção de uma falha crítica", "Pausar o deploy temporariamente para análise", "Testar o deploy em um ambiente de homologação"], resposta: 1 }
        ],
        senior: [
            { pergunta: "O que é 'Observabilidade' (Observability) em DevOps e como se diferencia de 'Monitoramento'?", opcoes: ["São a mesma coisa", "Monitoramento mostra que algo está errado, Observabilidade te ajuda a entender por que está errado, permitindo fazer novas perguntas ao sistema", "Observabilidade é sobre segurança, Monitoramento é sobre performance", "Monitoramento é para hardware, Observabilidade para software"], resposta: 1 },
            { pergunta: "O que é 'DevSecOps'?", opcoes: ["Uma equipe de desenvolvedores focada apenas em segurança", "A filosofia de integrar as práticas de segurança em todas as fases do ciclo de vida DevOps, desde o início", "Uma ferramenta de automação de testes de segurança", "Um tipo de certificação de segurança para redes e servidores"], resposta: 1 },
            { pergunta: "Para que serve uma ferramenta de orquestração de containers como o Kubernetes (K8s)?", opcoes: ["Para construir imagens de container a partir de um Dockerfile", "Para automatizar o deploy, o escalonamento, a auto-recuperação e a gestão de aplicações em containers em larga escala", "Para escrever o código da aplicação que rodará no container", "Para armazenar e distribuir as imagens de container"], resposta: 1 },
            { pergunta: "O que é um 'post-mortem' de incidente?", opcoes: ["Uma reunião para apontar culpados após uma falha no sistema", "O processo de desligar um servidor com defeito", "Uma análise detalhada e 'sem culpa' de um incidente para entender a causa raiz e definir ações para prevenir recorrências", "Um relatório de performance do sistema enviado aos gestores"], resposta: 2 },
            { pergunta: "O que é um 'Service Mesh' como Istio ou Linkerd?", opcoes: ["A infraestrutura de rede física do data center", "Uma camada de infraestrutura dedicada para gerenciar a comunicação entre microsserviços, adicionando confiabilidade, segurança e observabilidade", "Um tipo de firewall de rede para microsserviços", "Uma ferramenta para desenhar a arquitetura de microsserviços"], resposta: 1 }
        ]
    }
};