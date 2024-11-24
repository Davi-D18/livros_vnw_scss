import PropTypes from "prop-types";
import S from "./styles/cardLivro.module.scss";

export function CardLivro(props) {
  return (
    <article className={S.articleLivro}>
      <img className={S.imagem} src={props.imagem} alt="Imagem do Livro" />
      <p className={S.descricao}>{props.descricao}</p>
      <p className={S.paginas}>
        Páginas: <span>{props.paginas}</span>
      </p>
    </article>
  );
}

CardLivro.propTypes = {
  imagem: PropTypes.node.isRequired,
  descricao: PropTypes.string.isRequired,
  paginas: PropTypes.string.isRequired,
};
