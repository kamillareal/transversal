import { Container, Gap } from "pages";
import AppBarHeader from "shared/components/app-bar";
import ia from "../../assets/ia.png";

export const Conclusao = () => {
  return (
    <div>
      <AppBarHeader></AppBarHeader>
      <Container style={{ display: "flex", alignItems: "center" }}>
        <img src={ia} alt="" style={{ width: "40%", paddingTop: "5rem" }} />
        <Gap
          style={{
            fontSize: "20px",
            padding: "1rem 4rem",
            textAlign: "center",
            lineHeight: "2rem",
          }}
        >
          A inteligência artificial é uma força transformadora, mas não isenta
          de questões éticas. O racismo algorítmico, a privacidade de dados e o
          impacto social no mercado são apenas algumas das preocupações que
          devem ser abordadas de maneira ética e responsável. A conscientização
          sobre essas questões, a regulamentação adequada e o compromisso com a
          diversidade e a justiça são passos cruciais para garantir que a IA
          beneficie a sociedade como um todo. Ao fazê-lo, podemos moldar um
          futuro em que a tecnologia seja uma aliada na busca do progresso
          humano, em vez de um obstáculo ético.
        </Gap>
      </Container>
    </div>
  );
};
