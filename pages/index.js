import { Folder } from "../img/folder";

function Home() {
  return (
    <html>
      <head>
        <title>Bem-vindo</title>
      </head>

      <body>
        <header>
          <h1> ADS - Aulas do 2º Semestre</h1>
        </header>

        <h3>Projeto Integrador</h3>
        <Folder />
        <p>Segunda-Feira</p>
        <a href="https://ca.bbcollab.com/guest/bd61dLhhajYKeqri9VW5h1oUHKECMRvJjTm5">
          <button>Ir para a Aula</button>
        </a>

        <h3>Algoritmos e Programação II</h3>
        <Folder />
        <p>Terça-Feira</p>
        <a href="https://ca.bbcollab.com/guest/f293f3357f5d4378b6c33c33439c1322 ">
          <button>Ir para a Aula</button>
        </a>

        <h3>Banco de Dados</h3>
        <Folder />
        <p>Quarta-Feira</p>
        <button>Ir para a Aula</button>

        <h3>Programação Web</h3>
        <Folder />
        <p>Quinta-Feira</p>
        <a href="https://ca.bbcollab.com/collab/ui/session/guest/0f065e1f25c24fe5b8a74dc829af2a4e">
          <button>Ir para a Aula</button>
        </a>

        <h3>Análise e Desenvolvimento</h3>
        <Folder />
        <p>Sexta-Feira</p>
        <button>Ir para a Aula</button>

        <footer>
          <p>
            Este projeto Opensource foi desenvolvido por <i>Érico</i> e{" "}
            <i>Luan Costa de Oliveira.</i>
          </p>
          <p>
            <b>
              <i>Beta 1.0</i>
            </b>
          </p>
        </footer>
      </body>
    </html>
  );
}

export default Home;
