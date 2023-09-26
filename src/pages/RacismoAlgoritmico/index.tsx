import { Gap } from "..";
import AppBarHeader from "../../shared/components/app-bar";

export const RacismoAlgoritmico = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        color: "rgba(0,0,0,0.7)",
      }}
    >
      <AppBarHeader></AppBarHeader>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "center",
          width: "100%",

          flexDirection: "column",
        }}
      >
        <h2
          style={{
            margin: "0",
            paddingTop: "1rem",
            alignSelf: "flex-start",
            paddingLeft: "1.5rem",
          }}
        >
          Racismo Algorítimico
        </h2>
        <img
          style={{ width: "30%", paddingTop: "2rem" }}
          src={require("../../assets/img/racism.webp")}
        ></img>

        <div style={{ width: "80%" }}>
          <Gap>
            O racismo algorítmico refere-se ao viés discriminatório presente em
            sistemas de inteligência artificial que podem perpetuar preconceitos
            raciais. Isso acontece quando os algoritmos, muitas vezes sem
            intenção, tomam decisões ou fazem recomendações que afetam
            desproporcionalmente grupos étnicos ou raciais de maneira negativa.
            Este problema destaca a importância de garantir que os algoritmos
            sejam justos e imparciais, independentemente da origem étnica das
            pessoas. Exemplo: Em 2018, foi revelado que o software de
            reconhecimento facial da Amazon tinha taxas de erro maiores em
            indivíduos com pele mais escura, gerando preocupações significativas
            de discriminação racial.
          </Gap>
        </div>
        <div style={{ width: "80%", paddingBottom: "2rem" }}>
          Causas:
          <Gap>
            {" "}
            1. Viés nos Dados: Os algoritmos de IA muitas vezes aprendem com
            dados históricos, refletindo assim os preconceitos existentes na
            sociedade.{" "}
          </Gap>
          <Gap>
            2. Treinamento Deficiente: Algoritmos podem não ser treinados
            adequadamente em conjuntos de dados diversificados, exacerbando o
            viés.{" "}
          </Gap>
          <Gap>
            3. Falta de Diversidade na Indústria: A falta de diversidade na
            criação de algoritmos pode resultar na falta de consideração de
            perspectivas variadas.
          </Gap>
          <div style={{ paddingTop: "2rem" }}>
            Como evitar:
            <Gap>
              {" "}
              1. Dados Diversificados: Utilizar conjuntos de dados aGapgentes e
              diversificados para treinar algoritmos e identificar e mitigar
              viés nos dados.{" "}
            </Gap>
            <Gap>
              2. Auditoria de Algoritmos: Realizar auditorias regulares para
              identificar e corrigir viés nos algoritmos.
            </Gap>
            <Gap>
              {" "}
              3. Diversidade na Indústria: Promover a diversidade na indústria
              de IA para trazer perspectivas variadas no desenvolvimento de
              algoritmos.
            </Gap>
          </div>
        </div>
      </div>
    </div>
  );
};
