import { Livros } from "../../data/info-livros.js";
import { CardLivro } from "../../components/CardLivro/CardLivro.jsx";

import S from "./styles/livrosDoados.module.scss";

export const LivrosDoados = () => {
  return (
    <section>
      <section className={S.sectionLivrosDoados}>
        <h1 className={S.titulo}>Livros Doados</h1>

        <section className={S.sectionLivros}>
          {Livros.map((livro, index) => (
            <CardLivro
              key={index}
              imagem={livro.imagem}
              descricao={livro.titulo}
            />
          ))}
        </section>
      </section>
    </section>
  );
};
