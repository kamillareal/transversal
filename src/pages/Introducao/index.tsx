import brainAi from "";
import { Fragment } from "react";
import AppBarHeader from "../../shared/components/app-bar";
import { Image } from "./styles";
export const Introducao = () => {
  return (
    <Fragment>
      <AppBarHeader></AppBarHeader>
      <Image></Image>
      <div>
        A ascensão da inteligência artificial (IA) trouxe consigo uma série de
        promessas e desafios. Enquanto as aplicações de IA têm o potencial de
        transformar positivamente a sociedade, também suscitam questões éticas
        profundas. Este artigo abordará três questões cruciais: racismo
        algorítmico, privacidade de dados e o impacto social no mercado,
        destacando exemplos, causas e estratégias para mitigar esses problemas
        éticos.
      </div>
    </Fragment>
  );
};
