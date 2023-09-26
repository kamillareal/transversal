import { Container, Gap } from "..";
import imagem from "../../assets/imagemm.webp";
import AppBarHeader from "../../shared/components/app-bar";

export const Introducaoo = () => {
  return (
    <div>
      <AppBarHeader></AppBarHeader>
      <Container style={{ display: "flex", alignItems: "center" }}>
        <img src={imagem} alt="" style={{ width: "40%", paddingTop: "5rem" }} />
        <Gap
          style={{
            fontSize: "20px",
            padding: "1rem 4rem",
            textAlign: "center",
            lineHeight: "2rem",
          }}
        >
          A ascensão da inteligência artificial (IA) trouxe consigo uma série de
          promessas e desafios. Enquanto as aplicações de IA têm o potencial de
          transformar positivamente a sociedade, também suscitam questões éticas
          profundas. Este artigo abordará três questões cruciais: racismo
          algorítmico, privacidade de dados e o impacto social no mercado,
          destacando exemplos, causas e estratégias para mitigar esses problemas
          éticos.
        </Gap>
      </Container>
    </div>
  );
};
