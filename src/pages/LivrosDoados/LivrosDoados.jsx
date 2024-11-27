import { Livros } from "../../data/info-livros.js";
import { CardLivro } from "../../components/CardLivro/CardLivro.jsx";
import { useState, useEffect } from "react";
import { Hourglass } from "react-loader-spinner";

import S from "./styles/livrosDoados.module.scss";

export const LivrosDoados = () => {
  const [renderizarConteudo, setRenderizarConteudo] = useState(false);

  // Função para simular o carregamento da página
  useEffect(() => {
    setTimeout(() => {
      setRenderizarConteudo(true);
    }, 1500);
  }, []);

  return (
    <section>
      {/* Quando a variável for true, renderiza o conteúdo */}
      {renderizarConteudo ? (
        <section className={S.sectionLivrosDoados}>
          <h1 className={S.titulo}>Livros Doados</h1>

          <section className={S.sectionLivros}>
            {Livros.map((livro, index) => (
              <CardLivro
                key={index}
                imagem={livro.imagem}
                descricao={livro.titulo}
                categoria={livro.categoria}
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
