import S from "./style/resumo.module.scss";
import { useFormContext } from "../../hooks/useFormContext"; // Importa o contexto
import { ProgressBar, ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component"; // Importa a biblioteca de notificações
import "react-notifications-component/dist/theme.css"; // Importa os estilos das notificações
import "animate.css"; // Importa animações

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
    }, 1000);
  }, []);

  const showNotification = () => {
    const isMobile = window.innerWidth <= 768;

    Store.addNotification({
      title: "Obrigado!",
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
    window.scrollTo(0, 0); // Scroll para o topo
    setTimeout(() => {
      navigate("/"); // Redireciona para a página inicial
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

            <div className={S.infoItem}>
              <strong>Imagem:</strong>
              <p className={S.infoText}>{formData.imagem}</p>
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
