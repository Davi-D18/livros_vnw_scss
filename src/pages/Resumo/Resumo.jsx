import "animate.css"; // Importa animações
import { useEffect, useRef, useState } from "react";
import { ProgressBar, ThreeDots } from "react-loader-spinner";
import { Store } from "react-notifications-component"; // Importa a biblioteca de notificações
import "react-notifications-component/dist/theme.css"; // Importa os estilos das notificações
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/useFormContext"; // Importa o contexto
import S from "./style/resumo.module.scss";

import IconImgColorida from "../../assets/icons-erro/error-colorida.png";
import IconImgLupaErro from "../../assets/icons-erro/error-img-lupa.png";

const isValidUrl = (url) => {
  try {
    new URL(url); // Verifica se a string é um URL válido
    return true;
  } catch {
    return false;
  }
};

export const Resumo = () => {
  const navigate = useNavigate();
  const { formData } = useFormContext();
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const tagParagrafo = useRef(null);
  const colorButton = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  const showNotification = () => {
    const isMobile = window.innerWidth <= 768;

    Store.addNotification({
      title: "Agradecemos :)",
      message: "Sua doação foi recebida com sucesso.",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: [
        "animate__animated",
        isMobile ? "animate__fadeInUp" : "animate__fadeIn",
      ],
      animationOut: [
        "animate__animated",
        isMobile ? "animate__fadeOutDown" : "animate__fadeOut",
      ],
      dismiss: {
        duration: isMobile ? 2700 : 3900,
        onScreen: true,
        showIcon: true,
        onDismiss: handleBack(),
      },
      width: isMobile ? 300 : 400,
    });
  };

  function handleBack() {
    setTimeout(() => {
      navigate("/");
      window.scrollTo(0, 0);
    }, 300);
  }

  function handleConfirm() {
    setLoadingButton(true);
    colorButton.current.style.backgroundColor = "#043355";

    setTimeout(() => {
      setLoadingButton(false);
      colorButton.current.style.backgroundColor = "#005695";
      showNotification();
    }, 1000);
  }

  const renderImage = () => {
    const { imagem } = formData;

    if (!isValidUrl(imagem)) {
      return (
        <div className={S.infoImagemInvalida}>
          <img
            className={S.infoImg}
            src={IconImgColorida}
            alt="Imagem de erro"
          />
          <p className={S.textImagemInvalida}>Link da imagem inválido</p>
        </div>
      );
    }

    return (
      <div className={S.infoImagem}>
        <img
          className={S.infoImg}
          src={imagem}
          alt={`Imagem do Livro ${formData.titulo}`}
          onError={(e) => {
            e.target.src = IconImgLupaErro;
            e.target.classList.replace(S.infoImg, S.infoImgErro);
            e.target.alt = "Imagem não encontrada";
            tagParagrafo.current.textContent = "Imagem não encontrada";
          }}
          loading="lazy"
        />
        <p className={S.textImagemNaoEncontrada} ref={tagParagrafo}></p>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className={S.containerLoader}>
          <ProgressBar className={S.loader} width={100} height={100} />
          <p className={S.errorMessage}>Carregando...</p>
        </div>
      ) : (
        <section className={S.resumoContainer}>
          <h1 className={S.title}>Resumo da Doação</h1>

          <div className={S.infoContainer}>
            <div className={S.infoItem}>
              <strong>Título:</strong>
              <p className={S.infoText}>{formData.titulo}</p>
            </div>

            <div className={S.infoItem}>
              <strong>Categoria:</strong>
              <p className={S.infoText}>{formData.categoria}</p>
            </div>

            <div className={S.infoItem}>
              <strong>Autor:</strong>
              <p className={S.infoText}>{formData.autor}</p>
            </div>

            <div className={S.infoItem + " " + S.infoItemImg}>
              <strong>Imagem:</strong>
              {renderImage()}
            </div>

            <div className={S.infoItem}>
              <strong>Quantidade de Páginas:</strong>
              <p className={S.infoText}>{formData.paginas}</p>
            </div>
          </div>

          <div className={S.buttonConfirm}>
            <button
              onClick={handleConfirm}
              className={S.button}
              ref={colorButton}
              disabled={loadingButton}
              aria-label="Confirmar doação"
            >
              {loadingButton ? (
                <ThreeDots
                  className={S.oval}
                  width={20}
                  height={20}
                  color="#FFF"
                />
              ) : (
                <>Confirmar</>
              )}
            </button>
          </div>
        </section>
      )}
    </>
  );
};
