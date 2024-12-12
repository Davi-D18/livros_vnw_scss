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

export const Resumo = () => {
  const navigate = useNavigate();
  const { formData } = useFormContext(); // Obtém os dados do formulário
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [loadingButton, setLoadingButton] = useState(false); // Estado para controlar o carregamento do botão
  const [buttonColor, setButtonColor] = useState(""); // Estado para armazenar a cor do botão

  useEffect(() => {
    // Simula o carregamento da página
    setTimeout(() => {
      setLoading(false); // Após 1 segundo, esconde o loader e mostra o conteúdo
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  const tagParagrafo = useRef(null);

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
        duration: isMobile ? 2700 : 3900, // Menor duração para dispositivos móveis
        onScreen: true,
        showIcon: true,
        onDismiss: handleBack(), // Redireciona após o fechamento
      },
      width: isMobile ? 300 : 400,
    });
  };

  function handleBack() {
    setTimeout(() => {
      navigate("/"); // Redireciona para a página inicial
      window.scrollTo(0, 0); // Scroll para o topo
    }, 300);
  }

  const handleConfirm = () => {
    setLoadingButton(true);
    setButtonColor("#043355"); // Muda a cor do botão

    setTimeout(() => {
      setLoadingButton(false);
      setButtonColor(""); // Reseta a cor do botão
      showNotification(); // Exibe a notificação
    }, 1000);
  };

  function mostrarText() {
    tagParagrafo.current.innerHTML = `Imagem não encontrada`;
    tagParagrafo.current.style.color = "black";
  }

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
              {formData.imagem ? (
                <div className={S.infoImagem}>
                  <img
                    className={S.infoImg}
                    src={formData.imagem}
                    alt={`Imagem do Livro ${formData.titulo}`}
                    onError={(e) => {
                      e.target.src = IconImgLupaErro;
                      e.target.classList.replace(S.infoImg, S.infoImgErro); // Substitui a classe
                      mostrarText();
                    }}
                    loading="lazy"
                  />

                  <p
                    className={S.infoImagemnaoEncontrada}
                    ref={tagParagrafo}
                  ></p>
                </div>
              ) : (
                <div className={S.infoImagemInvalida}>
                  <img
                    className={S.infoImg}
                    src={IconImgColorida}
                    loading="lazy"
                    alt="Imagem de erro"
                  />
                  <p className={S.textImagemInvalida}>
                    Link da Imagem Inválido
                  </p>
                </div>
              )}
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
              style={{ backgroundColor: buttonColor || undefined }} // Aplica a cor dinamicamente
              disabled={loadingButton} // Desabilita o botão enquanto estiver carregando
              aria-label="Confirmar doação" // Aria-label para acessibilidade
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
