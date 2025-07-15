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
    // Substitua a seção "dados" do seu bancoDeQuestoes por esta:

dados: {
    estagiario: [
        {
            pergunta: "Um estagiário precisa selecionar apenas os clientes do estado de 'SP' de uma tabela 'CLIENTES'. Qual query SQL ele usaria?",
            opcoes: [
                "SELECT * FROM CLIENTES WHERE estado = 'SP';",
                "GET * FROM CLIENTES FILTER BY estado = 'SP';",
                "SELECT * FROM CLIENTES AND estado = 'SP';",
                "FILTER CLIENTES ON estado = 'SP';"
            ],
            resposta: 0
        },
        {
            pergunta: "Qual é a principal biblioteca em Python que um estagiário usaria para ler um arquivo CSV e começar a manipular os dados em formato de tabela?",
            opcoes: [
                "TensorFlow, para criar redes neurais.",
                "Requests, para fazer chamadas de API.",
                "Pandas, para criar e manipular DataFrames.",
                "Django, para construir aplicações web."
            ],
            resposta: 2
        },
        {
            pergunta: "Em estatística descritiva, qual medida representa o valor do 'meio' de um conjunto de dados ordenado?",
            opcoes: [
                "A média, que é a soma de todos os valores dividida pelo número de valores.",
                "A moda, que é o valor que aparece com mais frequência no conjunto.",
                "A mediana, que é o valor que separa a metade superior da metade inferior.",
                "O desvio padrão, que mede a dispersão dos dados."
            ],
            resposta: 2
        },
        {
            pergunta: "Seu gestor pede uma análise rápida sobre as vendas do último mês, que estão em uma planilha Excel. Qual recurso você usaria para somar as vendas por categoria de produto?",
            opcoes: [
                "A função de 'Correção Ortográfica'.",
                "A criação de um 'Gráfico de Dispersão'.",
                "A funcionalidade de 'Tabela Dinâmica' (Pivot Table).",
                "A formatação de 'Cor da Fonte'."
            ],
            resposta: 2
        },
        {
            pergunta: "Qual é a função mais básica e essencial do Git para salvar suas alterações locais em um projeto?",
            opcoes: [
                "git push",
                "git commit",
                "git merge",
                "git clone"
            ],
            resposta: 1
        }
    ],
    junior: [
        {
            pergunta: "Um analista de dados júnior precisa criar um dashboard interativo para a equipe de vendas. Qual das seguintes ferramentas seria a mais adequada para essa tarefa?",
            opcoes: [
                "Apache Airflow, para orquestração de pipelines.",
                "Power BI ou Tableau, para visualização de dados e BI.",
                "VS Code, para edição de código.",
                "PostgreSQL, um sistema de gerenciamento de banco de dados."
            ],
            resposta: 1
        },
        {
            pergunta: "Qual é a etapa 'T' (Transform) em um processo de ETL (Extract, Transform, Load)?",
            opcoes: [
                "A extração de dados brutos de diversas fontes.",
                "O carregamento dos dados em um Data Warehouse.",
                "A aplicação de regras de negócio, limpeza e enriquecimento dos dados.",
                "O teste final da integridade dos dados carregados."
            ],
            resposta: 2
        },
        {
            pergunta: "Você precisa combinar informações de uma tabela 'Pedidos' com uma tabela 'Clientes' usando um campo em comum. Qual comando SQL é essencial para esta tarefa?",
            opcoes: [
                "GROUP BY",
                "ORDER BY",
                "JOIN",
                "UNION"
            ],
            resposta: 2
        },
        {
            pergunta: "Um engenheiro de dados júnior precisa armazenar arquivos brutos (JSONs, CSVs) de forma barata e escalável na nuvem antes de processá-los. Qual serviço da AWS é o mais indicado para isso?",
            opcoes: [
                "EC2, para máquinas virtuais.",
                "RDS, para bancos de dados relacionais gerenciados.",
                "Lambda, para execução de código serverless.",
                "S3 (Simple Storage Service), para armazenamento de objetos."
            ],
            resposta: 3
        },
        {
            pergunta: "Se você e sua equipe estão trabalhando no mesmo código usando Git, qual comando você usa para baixar as atualizações que seus colegas enviaram para o repositório remoto?",
            opcoes: [
                "git init",
                "git commit",
                "git pull",
                "git status"
            ],
            resposta: 2
        }
    ],
    pleno: [
         {
            pergunta: "Um engenheiro de dados pleno precisa agendar e monitorar dezenas de pipelines de ETL complexos que possuem dependências entre si. Qual ferramenta é o padrão da indústria para essa tarefa de orquestração?",
            opcoes: [
                "Git/GitHub",
                "Jupyter Notebook",
                "Apache Airflow",
                "Microsoft Excel"
            ],
            resposta: 2
        },
         {
            pergunta: "Para calcular um 'total acumulado' (running total) de vendas ao longo do tempo em uma query SQL, qual tipo de função seria mais eficiente e elegante?",
            opcoes: [
                "Uma subconsulta correlacionada para cada linha.",
                "Uma Window Function como `SUM() OVER (ORDER BY data)`.",
                "Um `GROUP BY` simples na coluna de data.",
                "Usar `UNION ALL` com a própria tabela múltiplas vezes."
            ],
            resposta: 1
        },
         {
            pergunta: "Um cientista de dados pleno precisa treinar um modelo de classificação, mas o dataset está desbalanceado. Qual técnica ele deveria considerar aplicar?",
            opcoes: [
                "Aumentar o número de épocas do treinamento.",
                "Usar técnicas de reamostragem como SMOTE (oversampling) ou RandomUnderSampler.",
                "Normalizar os dados usando a média e o desvio padrão.",
                "Remover todas as colunas com valores nulos do dataset."
            ],
            resposta: 1
        },
         {
            pergunta: "Qual a finalidade de usar o Docker para um cientista de dados pleno ao compartilhar um projeto de Machine Learning?",
            opcoes: [
                "Apenas para escrever o código em Python.",
                "Para criar um ambiente de desenvolvimento isolado e reprodutível, garantindo que o modelo funcione em qualquer máquina.",
                "Para visualizar os dados e criar gráficos interativos.",
                "Para se conectar diretamente ao banco de dados de produção."
            ],
            resposta: 1
        },
         {
            pergunta: "Você precisa otimizar uma query SQL lenta em uma tabela com milhões de linhas. Qual das seguintes seria a primeira e mais impactante ação a se considerar?",
            opcoes: [
                "Aumentar a memória RAM do servidor do banco de dados.",
                "Verificar e criar índices nas colunas usadas nas cláusulas `WHERE` e `JOIN`.",
                "Reescrever a query inteira em outra linguagem de programação.",
                "Dividir a tabela em várias tabelas menores."
            ],
            resposta: 1
        }
    ],
    senior: [
        {
            pergunta: "Um arquiteto de dados sênior está projetando uma solução para uma empresa que gera terabytes de dados não estruturados diariamente. Qual abordagem é a mais indicada para o armazenamento inicial desses dados?",
            opcoes: [
                "Implementar um Data Lake em um serviço de armazenamento de objetos como AWS S3 ou Google Cloud Storage.",
                "Criar um grande cluster de banco de dados relacional (SQL) com um esquema rígido para todos os dados.",
                "Armazenar todos os dados brutos em um único servidor de arquivos local de alta capacidade.",
                "Converter todos os dados para o formato de planilhas Excel para facilitar a visualização."
            ],
            resposta: 0
        },
        {
            pergunta: "Um líder técnico precisa escolher uma ferramenta para processamento de dados distribuído em larga escala. Qual das opções é o padrão de fato da indústria para essa tarefa?",
            opcoes: [
                "A biblioteca Pandas do Python.",
                "Apache Spark.",
                "Scripts Shell (Bash).",
                "Microsoft Access."
            ],
            resposta: 1
        },
        {
            pergunta: "No contexto de MLOps, para que serve uma ferramenta como o MLflow ou Kubeflow?",
            opcoes: [
                "Para escrever o código do modelo de Machine Learning em si.",
                "Para gerenciar todo o ciclo de vida do modelo, incluindo experimentação, reprodutibilidade, deploy e monitoramento.",
                "Para criar os dashboards de BI que consomem os resultados do modelo.",
                "Para realizar a limpeza e a transformação inicial dos dados brutos."
            ],
            resposta: 1
        },
        {
            pergunta: "Qual é um dos principais desafios da Governança de Dados em uma grande corporação?",
            opcoes: [
                "Escolher a linguagem de programação para os scripts de ETL.",
                "Garantir a qualidade, consistência, segurança e acessibilidade dos dados em toda a organização.",
                "Contratar mais estagiários para a equipe de dados.",
                "Decidir qual ferramenta de BI (Power BI ou Tableau) a empresa deve usar."
            ],
            resposta: 1
        },
        {
            pergunta: "Um Cientista de Dados Sênior precisa explicar para a diretoria por que um modelo de Deep Learning é a melhor abordagem para um problema de visão computacional. Qual é o argumento mais forte?",
            opcoes: [
                "Porque é a tecnologia mais nova e mais falada no momento.",
                "Porque o código em TensorFlow/PyTorch é mais fácil de escrever que SQL.",
                "Porque redes neurais profundas são capazes de aprender hierarquias complexas de features automaticamente a partir de dados brutos (pixels), superando modelos tradicionais em tarefas de imagem.",
                "Porque o treinamento do modelo pode ser feito em um único computador local sem a necessidade de GPUs."
            ],
            resposta: 2
        }
    ]
},
    frontend: {
        estagiario: [
            { pergunta: "O que significa a sigla HTML?", opcoes: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"], resposta: 0 },
            { pergunta: "Qual tag HTML é usada para inserir uma imagem em uma página?", opcoes: ["<picture>", "<img>", "<image>", "<src>"], resposta: 1 },
            { pergunta: "Qual a finalidade do CSS em uma página web?", opcoes: ["Definir a estrutura e o conteúdo dos elementos", "Controlar a interatividade e a lógica da página", "Definir a apresentação visual, como cores, fontes e layout", "Gerenciar a comunicação com o servidor"], resposta: 2 },
            { pergunta: "Qual tag é usada para criar o maior título padrão em HTML?", opcoes: ["<h6>", "<h1>", "<heading>", "<title>"], resposta: 1 },
            { pergunta: "Qual propriedade CSS altera a cor de fundo de um elemento?", opcoes: ["color", "font-family", "background-color", "border-color"], resposta: 2 }
        ],
        junior: [
            { pergunta: "Qual seletor CSS tem maior especificidade?", opcoes: ["Um seletor de classe (ex: .minha-classe)", "Um seletor de ID (ex: #meu-id)", "Um seletor de tag (ex: div)", "Um seletor universal (*)"], resposta: 1 },
            { pergunta: "O que o `box-sizing: border-box;` faz em CSS?", opcoes: ["Cria uma borda com formato de caixa", "Expande a caixa para caber o conteúdo", "Faz com que a largura e altura de um elemento incluam seu `padding` e `border`", "Centraliza a caixa na tela horizontalmente"], resposta: 2 },
            { pergunta: "Qual a diferença entre `display: inline` e `display: block`?", opcoes: ["`inline` não permite definir largura/altura, `block` sim", "`block` centraliza o elemento automaticamente", "`inline` é para imagens, `block` é para texto", "Não há diferença de comportamento"], resposta: 0 },
            { pergunta: "Qual a diferença entre `==` e `===` em JavaScript?", opcoes: ["Nenhuma, são intercambiáveis e fazem a mesma coisa", "`===` compara valor e tipo, enquanto `==` faz conversão de tipo antes de comparar", "`==` é considerado mais rápido e seguro pela comunidade", "`===` só pode ser usado para comparar números inteiros"], resposta: 1 },
            { pergunta: "Para que serve um `addEventListener` em JavaScript?", opcoes: ["Para criar novas variáveis no escopo global", "Para importar bibliotecas e módulos externos", "Para 'escutar' por um evento (como um clique) em um elemento e executar uma função", "Para estilizar um elemento dinamicamente com CSS"], resposta: 2 }
        ],
        pleno: [
            { pergunta: "Explique o 'event bubbling' (borbulhamento de eventos) no DOM.", opcoes: ["É um erro que faz com que eventos se repitam infinitamente", "É a propagação de um evento dos elementos mais internos para os mais externos na hierarquia do DOM", "É a técnica de criar animações de bolhas com CSS", "É quando um evento só é acionado no elemento mais específico"], resposta: 1 },
            { pergunta: "O que é o 'DOM' no contexto do desenvolvimento web?", opcoes: ["Um modelo de design de cores para websites", "Uma representação em árvore do documento HTML que permite ao JavaScript interagir com a página", "Um servidor de arquivos otimizado para a web", "Uma linguagem de estilização similar ao CSS"], resposta: 1 },
            { pergunta: "O que `async/await` realmente faz em JavaScript?", opcoes: ["Executa o código de forma paralela em múltiplas threads", "É 'açúcar sintático' sobre Promises, permitindo escrever código assíncrono de forma que pareça síncrona", "Declara uma variável que não pode ter seu valor alterado", "Cria um loop que se repete de forma assíncrona sem travar a página"], resposta: 1 },
            { pergunta: "O que é uma 'Closure' (fechamento) em JavaScript?", opcoes: ["Uma função que não retorna nenhum valor e sempre causa um erro", "A combinação de uma função com as referências ao seu estado lexical (escopo) circundante", "Um erro que ocorre quando uma variável não é encontrada no escopo", "Uma forma de fechar a janela do navegador via código"], resposta: 1 },
            { pergunta: "Qual o propósito do `Array.prototype.reduce()`?", opcoes: ["Reduzir o número de elementos em um array pela metade", "Filtrar os elementos de um array com base em uma condição", "Executar uma função 'redutora' para cada elemento do array, resultando em um único valor de retorno", "Verificar se todos os elementos do array são do mesmo tipo"], resposta: 2 }
        ],
        senior: [
            { pergunta: "Qual a diferença entre `React.memo`, `useCallback` e `useMemo`?", opcoes: ["São três nomes para a mesma funcionalidade de otimização de performance", "`memo` previne a re-renderização de um componente, `useCallback` memoriza funções e `useMemo` memoriza valores calculados", "`useMemo` é para componentes de classe, enquanto os outros são para componentes funcionais", "`memo` é para funções puras, `useCallback` para funções com efeitos colaterais"], resposta: 1 },
            { pergunta: "O que é 'Hydration' (Hidratação) no contexto de frameworks como Next.js ou SvelteKit?", opcoes: ["O processo de carregar todas as folhas de estilo CSS de uma vez", "O processo pelo qual o JavaScript 'dá vida' e adiciona interatividade a uma página HTML estática pré-renderizada no servidor", "Uma técnica para comprimir imagens e outros assets para otimizar o carregamento", "O ato de pré-carregar dados de uma API externa antes da navegação do usuário"], resposta: 1 },
            { pergunta: "O que é 'Server-Side Rendering' (SSR) e qual sua principal vantagem para SEO?", opcoes: ["Renderizar a página no servidor antes de enviá-la ao cliente, entregando um HTML completo que os buscadores conseguem indexar facilmente", "Uma técnica para carregar vídeos de forma mais rápida e eficiente em conexões lentas", "Renderizar toda a aplicação e sua lógica apenas no lado do cliente, usando o poder de processamento do dispositivo do usuário", "Um método de segurança para proteger APIs contra ataques de negação de serviço"], resposta: 0 },
            { pergunta: "O que é 'Tree Shaking' em um contexto de build de frontend?", opcoes: ["Uma animação de CSS que simula uma árvore balançando para indicar carregamento", "O processo de eliminar código não utilizado ('dead-code') do bundle final para reduzir seu tamanho", "Uma forma de organizar a estrutura de pastas do projeto em formato de árvore hierárquica", "Uma técnica de debug para encontrar erros em árvores de componentes aninhados"], resposta: 1 },
            { pergunta: "Explique o conceito de 'state management' e por que ferramentas como Redux são necessárias em aplicações grandes.", opcoes: ["Para gerenciar o estado da conexão do servidor", "Para centralizar e gerenciar o estado da aplicação de forma previsível, evitando a passagem de `props` por múltiplos níveis", "Para gerenciar o estado de conexão com a internet do usuário", "Para salvar o estado da aplicação no `localStorage` automaticamente a cada segundo"], resposta: 1 }
        ]
    },
    backend: {
        estagiario: [
            { pergunta: "Qual o significado de HTTP?", opcoes: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Protocol", "HyperText Transfer Page"], resposta: 0 },
            { pergunta: "Qual status HTTP indica um erro de 'Não Encontrado'?", opcoes: ["200", "301", "404", "500"], resposta: 2 },
            { pergunta: "Qual é o papel principal de um servidor web?", opcoes: ["Apenas exibir vídeos e imagens estáticas", "Armazenar senhas de redes Wi-Fi locais", "Processar requisições HTTP de clientes e enviar respostas adequadas", "Acelerar a velocidade da internet do usuário final"], resposta: 2 },
            { pergunta: "O que 'localhost' geralmente se refere em um contexto de desenvolvimento?", opcoes: ["Ao servidor principal do Google", "A um servidor remoto na nuvem", "À sua própria máquina local, com o endereço de IP 127.0.0.1", "A um endereço de site que está fora do ar"], resposta: 2 },
            { pergunta: "O que é uma 'rota' em uma aplicação web backend?", opcoes: ["O caminho físico que os cabos de rede fazem até o servidor", "Um endpoint (URL) que a aplicação é programada para responder de uma maneira específica", "Uma função para calcular distâncias entre dois pontos geográficos", "Um tipo de variável de ambiente para configurar a rede"], resposta: 1 }
        ],
        junior: [
            { pergunta: "O que é 'Middleware' no contexto de frameworks como o Express?", opcoes: ["O banco de dados principal da aplicação", "Funções que executam no meio do ciclo de requisição-resposta, podendo modificar os objetos `req` e `res`", "O frontend da aplicação desenvolvido em React ou Vue", "Uma ferramenta de deploy automático para o servidor"], resposta: 1 },
            { pergunta: "Qual é a principal função de um ORM (Object-Relational Mapping)?", opcoes: ["Otimizar a performance bruta do servidor", "Traduzir código entre diferentes linguagens de programação", "Abstrair as queries SQL, permitindo interagir com o banco de dados usando objetos da linguagem de programação", "Gerenciar a autenticação e autorização de usuários"], resposta: 2 },
            { pergunta: "Qual a diferença fundamental entre um banco de dados SQL e um NoSQL?", opcoes: ["SQL é mais antigo, NoSQL é mais novo", "SQL usa tabelas com esquemas rígidos, NoSQL usa coleções com documentos flexíveis (como JSON)", "SQL é gratuito, NoSQL é sempre pago", "SQL só roda em Linux, NoSQL em Windows"], resposta: 1 },
            { pergunta: "Para que serve o `npm` (Node Package Manager) em um projeto backend com Node.js?", opcoes: ["Para monitorar a performance do servidor em tempo real", "Para gerenciar as dependências (bibliotecas e pacotes) do projeto", "Para escrever o código da aplicação em uma interface gráfica", "Para criar e gerenciar múltiplos bancos de dados"], resposta: 1 },
            { pergunta: "O que são 'Variáveis de Ambiente' e por que são importantes para a segurança?", opcoes: ["Variáveis globais que podem ser acessadas por qualquer usuário", "Variáveis configuradas fora do código, usadas para armazenar dados sensíveis como chaves de API e senhas de banco de dados", "Variáveis que medem a temperatura do ambiente do servidor", "Variáveis que só existem no navegador do cliente"], resposta: 1 }
        ],
        pleno: [
            { pergunta: "O que significa dizer que uma API REST é 'stateless' (sem estado)?", opcoes: ["Que a API não possui nenhuma rota ou endpoint configurado", "Que a API não consegue registrar logs de erro", "Que cada requisição do cliente deve conter toda a informação necessária, pois o servidor não guarda o estado do cliente entre requisições", "Que a API está temporariamente fora do ar ou em manutenção"], resposta: 2 },
            { pergunta: "O que é um JWT (JSON Web Token) e para que é comumente usado?", opcoes: ["Uma biblioteca JavaScript para criar tabelas dinâmicas", "Uma forma de compactar arquivos JSON para transferência", "Um padrão para transmitir 'claims' de forma segura entre partes como um objeto JSON assinado digitalmente", "Um tipo de banco de dados em memória que armazena JSON"], resposta: 2 },
            { pergunta: "Qual a diferença crucial entre Autenticação e Autorização?", opcoes: ["São termos sinônimos para o mesmo processo de login", "Autenticação é o processo de verificar *quem* você é, enquanto Autorização é o processo de verificar *o que* você tem permissão para fazer", "Autorização sempre ocorre antes da Autenticação no fluxo de login", "Autenticação é feita no frontend, Autorização no backend"], resposta: 1 },
            { pergunta: "Para que serve um sistema de 'caching' como o Redis ou Memcached no backend?", opcoes: ["Para registrar logs de erros de forma persistente", "Para armazenar temporariamente dados frequentemente acessados em memória, acelerando drasticamente as respostas", "Para autenticar usuários de forma mais segura", "Para fazer o deploy automático da aplicação em múltiplos servidores"], resposta: 1 },
            { pergunta: "O que é o padrão de arquitetura 'Singleton'?", opcoes: ["Permitir que apenas um usuário acesse o sistema por vez", "Um padrão de design que restringe a instanciação de uma classe a um único objeto em toda a aplicação", "Um método para escrever todo o código em um único arquivo", "Uma forma de se conectar a um único banco de dados"], resposta: 1 }
        ],
        senior: [
            { pergunta: "Descreva o fluxo de uma autenticação OAuth 2.0 (Authorization Code Flow).", opcoes: ["O usuário envia sua senha diretamente para a API, que retorna um token de acesso", "O usuário autoriza um app terceiro, que recebe um código, troca esse código por um token de acesso e usa o token para acessar a API em nome do usuário", "O app gera um token aleatório e envia ao servidor para validação", "É um sistema baseado em senhas de uso único enviadas por SMS"], resposta: 1 },
            { pergunta: "Quais são as diferenças entre as estratégias de balanceamento de carga Round Robin, Least Connections e IP Hash?", opcoes: ["Não há diferença, todas distribuem o tráfego de forma aleatória", "Round Robin distribui sequencialmente, Least Connections para o servidor com menos conexões ativas, e IP Hash direciona requisições do mesmo IP para o mesmo servidor", "IP Hash é um método de segurança, os outros são para performance", "Round Robin é o mais lento e obsoleto de todos"], resposta: 1 },
            { pergunta: "Explique o conceito de 'Idempotência' em uma API REST.", opcoes: ["A capacidade de uma API responder em múltiplos idiomas", "Uma propriedade de uma operação que permite que ela seja realizada múltiplas vezes com o mesmo resultado da primeira vez (ex: `PUT`, `DELETE`)", "A velocidade com que a API retorna uma resposta", "Um tipo de cache que armazena as respostas da API"], resposta: 1 },
            { pergunta: "Para que servem 'Message Queues' (Filas de Mensagens) como RabbitMQ ou Kafka em uma arquitetura de microsserviços?", opcoes: ["Para armazenar o histórico de conversas de um chat", "Para permitir a comunicação assíncrona e desacoplada entre diferentes serviços, aumentando a resiliência e escalabilidade", "Para criar backups do banco de dados em tempo real", "Para gerenciar o deploy de aplicações em uma ordem específica"], resposta: 1 },
            { pergunta: "O que é 'Database Sharding' e que problema ele resolve?", opcoes: ["Um tipo de criptografia avançada para bancos de dados", "O processo de particionar horizontalmente um banco de dados grande em partes menores (shards) para resolver problemas de escalabilidade de escrita e leitura", "Uma técnica de backup que cria cópias espelhadas do banco de dados", "Uma forma de renomear tabelas do banco de dados sem causar downtime na aplicação"], resposta: 1 }
        ]
    },
    devops: {
        estagiario: [
            { pergunta: "Para que serve o Git?", opcoes: ["Para escrever código", "Para testar o layout de sites", "Para versionar e controlar o histórico de alterações em arquivos de código", "Para otimizar imagens para a web"], resposta: 2 },
            { pergunta: "O que é um 'deploy' no contexto de software?", opcoes: ["Desenhar a interface do usuário", "Escrever a documentação do projeto", "O processo de publicar uma nova versão de um software em um ambiente (produção, homologação, etc.)", "Corrigir um bug em desenvolvimento"], resposta: 2 },
            { pergunta: "O que é um 'servidor'?", opcoes: ["Um computador ou programa que fornece serviços a outros computadores (clientes)", "O computador pessoal de um desenvolvedor de software", "Um tipo de software antivírus para proteção de redes", "Um cabo de rede de alta velocidade para data centers"], resposta: 0 },
            { pergunta: "O que significa 'a nuvem' (the cloud) em computação?", opcoes: ["A internet como um todo", "Servidores, bancos de dados, armazenamento e serviços de computação acessíveis pela internet", "Um sistema de armazenamento sem fio para backups pessoais", "O nome popular para a sede da Google na Califórnia"], resposta: 1 },
            { pergunta: "Qual o propósito de um endereço de IP?", opcoes: ["Identificar um dispositivo de forma única em uma rede para permitir a comunicação", "O nome de um website que digitamos no navegador (ex: google.com)", "Uma senha de segurança para proteger redes Wi-Fi", "Um tipo de processador de rede"], resposta: 0 }
        ],
        junior: [
            { pergunta: "O que é um 'container' Docker?", opcoes: ["Um tipo de servidor físico otimizado para web", "Uma máquina virtual completa, porém mais pesada e lenta", "Um ambiente de software leve e portável que empacota uma aplicação e todas as suas dependências", "Uma ferramenta de edição de código exclusiva para o sistema operacional Linux"], resposta: 2 },
            { pergunta: "O que é 'Infraestrutura como Código' (IaC)?", opcoes: ["A documentação em texto da infraestrutura do servidor", "A prática de gerenciar e provisionar infraestrutura de TI usando arquivos de definição legíveis por máquina", "Um tipo de hardware de rede programável", "Um antivírus que protege servidores na nuvem contra ataques"], resposta: 1 },
            { pergunta: "O que é um 'repositório' no contexto do Git?", opcoes: ["Um tipo de servidor de arquivos na nuvem", "Um banco de dados otimizado para armazenar código fonte", "Uma pasta que contém todos os arquivos e o histórico de um projeto rastreado pelo Git", "O perfil público de um usuário em plataformas como o GitHub"], resposta: 2 },
            { pergunta: "Para que serve um arquivo YAML?", opcoes: ["Para estilizar páginas web, como uma alternativa ao CSS", "Para escrever a lógica principal de uma aplicação, como o JavaScript", "Para armazenar dados de configuração de forma legível para humanos, muito usado em arquivos de configuração de DevOps", "Para criar imagens e vídeos para a aplicação"], resposta: 2 },
            { pergunta: "O que é o 'build' de uma aplicação?", opcoes: ["O processo de planejar as funcionalidades e a arquitetura", "O processo automatizado que compila o código-fonte e empacota os arquivos para torná-los executáveis ou publicáveis", "A reunião diária da equipe para sincronizar o trabalho", "O teste manual do software por um usuário final"], resposta: 1 }
        ],
        pleno: [
            { pergunta: "O que significa a sigla 'CI/CD'?", opcoes: ["Continuous Integration / Continuous Deployment (ou Delivery)", "Code Inspection / Code Delivery", "Central Intelligence / Central Dispatch", "Client Interaction / Customer Demos"], resposta: 0 },
            { pergunta: "Em CI/CD, qual é a principal função da 'Entrega Contínua' (Continuous Delivery)?", opcoes: ["Fazer o deploy do código diretamente para produção automaticamente", "Garantir que cada alteração no código seja automaticamente testada e o 'build' gerado, pronto para ser liberado para produção com um clique", "Escrever os testes de integração do sistema", "Monitorar a performance do servidor em tempo real"], resposta: 1 },
            { pergunta: "O que é um 'Dockerfile'?", opcoes: ["Um container Docker que já está em execução", "Um script para instalar o Docker em um novo servidor", "Um arquivo de texto com uma receita (instruções) para construir uma imagem Docker", "A documentação oficial do Docker em formato de arquivo de texto"], resposta: 2 },
            { pergunta: "Qual o objetivo principal de uma ferramenta de monitoramento como Prometheus?", opcoes: ["Escrever código de forma mais rápida e eficiente", "Fazer o deploy da aplicação em múltiplos servidores", "Coletar métricas numéricas em séries temporais para monitorar a saúde e performance de um sistema para identificar problemas", "Gerenciar senhas e segredos da aplicação de forma segura"], resposta: 2 },
            { pergunta: "O que é um 'rollback' em um processo de deploy?", opcoes: ["Aprovar o deploy para o próximo ambiente de testes", "Reverter uma aplicação para uma versão anterior estável, geralmente após a detecção de uma falha crítica na nova versão", "Pausar o deploy temporariamente para uma análise manual", "Testar o deploy em um ambiente de homologação antes de ir para produção"], resposta: 1 }
        ],
        senior: [
            { pergunta: "O que é 'Observabilidade' (Observability) e como se diferencia de 'Monitoramento'?", opcoes: ["São exatamente a mesma coisa, apenas um termo mais moderno", "Monitoramento te diz *se* o sistema está funcionando, Observabilidade te ajuda a entender *por que* ele não está, permitindo explorar o desconhecido", "Observabilidade é focada em segurança, enquanto Monitoramento é focado em performance", "Monitoramento é para hardware e infraestrutura, Observabilidade para o código da aplicação"], resposta: 1 },
            { pergunta: "O que é 'DevSecOps'?", opcoes: ["Uma equipe de desenvolvedores que são especialistas em segurança", "A filosofia de integrar a segurança como uma responsabilidade compartilhada em todas as fases do ciclo de vida DevOps", "Uma ferramenta de automação que realiza testes de segurança", "Um tipo de certificação de segurança para redes e servidores em nuvem"], resposta: 1 },
            { pergunta: "Para que serve uma ferramenta de orquestração de containers como o Kubernetes (K8s)?", opcoes: ["Para construir imagens de container a partir de um Dockerfile", "Para automatizar o deploy, o escalonamento, a auto-recuperação e a gestão de aplicações em containers em larga escala", "Para escrever o código da aplicação que será executado dentro do container", "Para armazenar e distribuir as imagens de container, como o Docker Hub"], resposta: 1 },
            { pergunta: "O que é um 'post-mortem' de incidente e por que ele deve ser 'blameless' (sem culpa)?", opcoes: ["Uma reunião para apontar os culpados por uma falha no sistema", "O processo técnico de desligar um servidor que apresentou defeito", "Uma análise para entender a causa raiz de um incidente, focando em falhas de processo e sistema, não em erros humanos, para aprender e prevenir futuras ocorrências", "Um relatório de performance do sistema enviado para a diretoria"], resposta: 2 },
            { pergunta: "O que é um 'Service Mesh' como Istio ou Linkerd?", opcoes: ["A infraestrutura de rede física do data center onde os servidores estão localizados", "Uma camada de infraestrutura dedicada para gerenciar a comunicação entre microsserviços, adicionando confiabilidade, segurança e observabilidade", "Um tipo de firewall de rede otimizado para microsserviços", "Uma ferramenta para desenhar a arquitetura de microsserviços de forma visual"], resposta: 1 }
        ]
    }
};