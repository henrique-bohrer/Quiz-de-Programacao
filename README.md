﻿# 🏆 QuizProg: Um Quiz Interativo de Programação
 
![Tela Inicial do QuizProg](https://github.com/user-attachments/assets/4d318618-9b13-471e-a307-b2db74707ae4)

Um quiz interativo e dinâmico focado em temas de programação, projetado para testar e aprimorar os conhecimentos de desenvolvedores em diferentes níveis de senioridade. O projeto foi construído do zero com tecnologias web fundamentais (HTML, CSS, JavaScript) e possui um design moderno, responsivo e com micro-interações que garantem uma excelente experiência de usuário.

---

## ✨ Funcionalidades Principais

* 🎨 **Design Moderno e Responsivo:** Interface com efeito "Glassmorphism" (vidro fosco) que se adapta perfeitamente a desktops, tablets e celulares.
* 🧭 **Teste de Nivelamento:** Um teste inicial que analisa as preferências do usuário para sugerir a área de programação mais adequada para ele.
* 📚 **Múltiplos Temas:** Quizzes separados por áreas de atuação do mercado de TI.
    * <i class="fas fa-database"></i> **Área de Dados**
    * <i class="fas fa-desktop"></i> **Frontend**
    * <i class="fas fa-server"></i> **Backend**
    * <i class="fas fa-cloud-upload-alt"></i> **DevOps**
* 📈 **Níveis de Dificuldade:** Cada tema possui 4 níveis de dificuldade com ícones e multiplicadores de pontos crescentes.
    * <i class="fas fa-baby"></i> **Estagiário (1x)**
    * <i class="fas fa-graduation-cap"></i> **Júnior (1.5x)**
    * <i class="fas fa-briefcase"></i> **Pleno (2x)**
    * <i class="fas fa-crown"></i> **Sênior (3x)**
* 🥇 **Sistema de Ranking Local:** As pontuações são salvas no navegador do usuário usando `LocalStorage`, com um Hall da Fama para os 10 melhores resultados.
* 💅 **UI/UX Polida:** Animações de transição entre telas, tooltips informativos e efeitos de `hover` interativos que melhoram a experiência de uso.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias base da web, sem a necessidade de frameworks complexos.

* **HTML5:** Para a estrutura semântica do conteúdo.
* **CSS3:** Para toda a estilização, utilizando recursos modernos como:
    * Variáveis CSS para um sistema de temas dinâmico.
    * Flexbox para alinhamento dos layouts.
    * Animações com `@keyframes`.
    * `backdrop-filter` para o efeito de Glassmorphism.
* **JavaScript (ES6+):** Para toda a lógica do jogo, incluindo:
    * Manipulação do DOM.
    * Gerenciamento de estado do jogo (telas, temas, níveis, pontuação).
    * Persistência de dados com `LocalStorage` para o ranking.
* **Font Awesome:** Para a biblioteca de ícones.

---

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo.

1.  **Clone o repositório** (se estiver no Git) ou simplesmente baixe os arquivos para uma pasta no seu computador.
    ```bash
    # Exemplo com Git
    git clone [https://github.com/seu-usuario/quiz-de-programacao.git](https://github.com/seu-usuario/quiz-de-programacao.git)
    ```
2.  **Navegue até a pasta** do projeto no seu terminal ou explorador de arquivos.
    ```bash
    cd quiz-de-programacao
    ```
3.  **Abra o arquivo `index.html`** no seu navegador de preferência.
    * **Dica Profissional:** Para a melhor experiência de desenvolvimento, use a extensão **"Live Server"** no Visual Studio Code. Ela cria um servidor local e atualiza a página automaticamente sempre que você salva um arquivo.

---

## 📁 Estrutura de Arquivos

O projeto está organizado da seguinte forma para facilitar a manutenção:

/
|-- index.html          # Arquivo principal da estrutura
|-- css/
|   |-- style.css       # Folha de estilos principal
|-- js/
|   |-- script.js       # Lógica principal do jogo e da interface
|   |-- questoes.js     # "Banco de dados" com as perguntas do quiz
|-- README.md           # A documentação que você está lendo

---

## 🔮 Melhorias Futuras

Este projeto tem uma base sólida que permite muitas expansões futuras, como:

* **Backend e Banco de Dados Real:** Para criar um ranking global e persistente.
* **Sistema de Autenticação:** Para que os usuários possam ter perfis e histórico de jogos.
* **Novas Páginas:** Criação de telas de "Sobre" e "Contato".
* **Mais Perguntas:** Expandir massivamente o banco de questões.

---

## ✍️ Autor

Feito com ❤️ por **Henrique Bressiani** com a ajuda do seu Parceiro de Programação.

---

Este projeto está sob a licença MIT.
