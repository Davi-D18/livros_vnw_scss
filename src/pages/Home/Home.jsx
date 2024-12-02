import S from "./styles/home.module.scss";
import { useEffect } from "react";

// Imagens
import Icon1 from "../../assets/icons/grupo-pessoas.png";
import Icon2 from "../../assets/icons/pessoa-lendo.png";
import Icon3 from "../../assets/icons/mao-fechada.png";
import Icon4 from "../../assets/icons/balanca.png";
import { CardMotivosDoar } from "../../components/CardMotivosDoar/CardMotivosDoar";

export function Home() {
  useEffect(() => {
    // Variável de controle para garantir que a simulação seja feita apenas uma vez
    let layoutAdjusted = false;

    // Função para simular o movimento de rolagem
    function simulateScroll() {
      // Verifica se já foi ajustado antes
      if (layoutAdjusted) return;

      // Simula um pequeno scroll para forçar o layout a se ajustar
      window.scrollBy(0, 3); // Rolagem de 1px para baixo
      window.scrollBy(0, -3); // Rolagem de 1px para cima

      // Marcar como ajustado
      layoutAdjusted = true;
    }

    // Espera o carregamento da página
    window.addEventListener("load", () => {
      // Chama a função para simular o scroll após o carregamento da página
      setTimeout(simulateScroll, 500); // Ajuste o tempo conforme necessário
    });
  }, []);

  const data = [
    {
      id: 1,
      iconeCard: Icon1,
      descricao:
        "Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
    },
    {
      id: 2,
      iconeCard: Icon2,
      descricao: "Estimula o hábito da leitura e o aprendizado contínuo.",
    },
    {
      id: 3,
      iconeCard: Icon3,
      descricao:
        "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.",
    },
    {
      id: 4,
      iconeCard: Icon4,
      descricao:
        "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
    },
  ];

  return (
    <main>
      <section className={S.sectionContainer}>
        <h2 className={S.title}>Venha Fazer Parte Da Maior Rede De Doação</h2>
      </section>

      <section className={S.containerDoar}>
        <h2 className={S.textPorqueDoar}>Por que devo doar?</h2>

        <div className={S.containerCards}>
          {data.map((card) => (
            <CardMotivosDoar
              key={card.id}
              iconeCard={card.iconeCard}
              descricao={card.descricao}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
