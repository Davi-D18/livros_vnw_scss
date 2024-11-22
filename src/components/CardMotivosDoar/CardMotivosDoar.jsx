import PropTypes from "prop-types";
import * as S from "./styles/cardMotivosDoar.module.scss";

export function CardMotivosDoar(props) {
  return (
    <article className={S.articleCard}>
      <img className={S.iconCard} src={props.iconeCard} alt="Ícone do Card" />
      <p className={S.descricao}>{props.descricao}</p>
    </article>
  );
}

// Validação de props com PropTypes
CardMotivosDoar.propTypes = {
  iconeCard: PropTypes.node.isRequired,
  descricao: PropTypes.string.isRequired,
};
