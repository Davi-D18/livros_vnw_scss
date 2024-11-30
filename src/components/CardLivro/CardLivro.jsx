import PropTypes from "prop-types";
import S from "./styles/cardLivro.module.scss";

export function CardLivro(props) {
  return (
    <article className={S.articleLivro}>
      <img
        className={S.imagem}
        src={props.imagem}
        alt="Imagem do Livro"
        loading="lazy" // Carrega a imagem quando estiver prestes a ser exibida
      />
      <ul className={S.listaInfo}>
        <li className={S.descricao}>{props.descricao}</li>
        <li>
          Páginas: <span className={S.paginas}>{props.paginas}</span>
        </li>
        <li>
          Categoria: <span className={S.categoria}>{props.categoria}</span>
        </li>
      </ul>
    </article>
  );
}

CardLivro.propTypes = {
  imagem: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  paginas: PropTypes.number.isRequired,
};
