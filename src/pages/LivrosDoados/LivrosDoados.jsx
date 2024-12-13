import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { CardLivro } from "../../components/CardLivro/CardLivro.jsx";
import { Livros } from "../../data/info-livros.js";

import S from "./styles/livrosDoados.module.scss";

export const LivrosDoados = () => {
  const [renderizarConteudo, setRenderizarConteudo] = useState(false);
  const [livrosRenderizados, setLivrosRenderizados] = useState([]); // Livros renderizados
  const [indiceAtual, setIndiceAtual] = useState(0); // Controle de índice para evitar renderizações repetidas

  // Função para simular o carregamento da página
  useEffect(() => {
    const delayInicial = 1500; // Tempo inicial de carregamento
    const timeout = setTimeout(() => {
      setRenderizarConteudo(true);
    }, delayInicial);

    return () => clearTimeout(timeout); // Limpa o timeout
  }, []);

  // renderiza os livros um por um
  useEffect(() => {
    if (renderizarConteudo && indiceAtual < Livros.length) {
      const atraso = window.innerWidth < 768 ? 500 : 365;
      const timeout = setTimeout(() => {
        setLivrosRenderizados((prevLivros) => [
          ...prevLivros,
          Livros[indiceAtual],
        ]);
        setIndiceAtual((prevIndex) => prevIndex + 1); // Atualiza o índice
      }, atraso);

      return () => clearTimeout(timeout); // Limpa o timeout
    }
  }, [renderizarConteudo, indiceAtual]);

  return (
    <section>
      {/* Quando a variável for true, renderiza o conteúdo */}
      {renderizarConteudo ? (
        <section className={S.sectionLivrosDoados}>
          <h1 className={S.titulo}>Livros Doados</h1>

          <section className={S.sectionLivros}>
            {livrosRenderizados.map((livro, index) => (
              <CardLivro
                key={index}
                id={livro.id}
                titulo={livro.titulo}
                categoria={livro.categoria}
                imagem={livro.imagem}
                paginas={parseInt(livro.paginas)}
              />
            ))}
          </section>
        </section>
      ) : (
        <div className={S.containerLoader}>
          <Hourglass />
          <p>Buscando Livros...</p>
        </div>
      )}
    </section>
  );
};
