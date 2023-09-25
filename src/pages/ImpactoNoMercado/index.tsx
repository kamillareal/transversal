import AppBarHeader from "../../shared/components/app-bar";

export const ImpactoNoMercado = () => {
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
          Impacto da automação no mercado
        </h2>
        <img
          style={{ width: "70%", paddingTop: "2rem" }}
          src={require("../../assets/img/racism.webp")}
        ></img>

        <div style={{ width: "80%" }}>
          <div>
            O impacto social no mercado refere-se às mudanças significativas que
            a automação e a inteligência artificial estão trazendo para o mundo
            do trabalho e da economia. À medida que mais tarefas são
            automatizadas, surgem preocupações sobre o desemprego, a
            desigualdade e o futuro das profissões. É um tópico crítico que
            exige planejamento estratégico, educação e políticas adequadas para
            garantir que a automação beneficie a sociedade como um todo e não
            prejudique grupos vulneráveis. Exemplo: A automação de tarefas está
            ameaçando empregos em setores como varejo e manufatura, levando a
            preocupações sobre o desemprego em massa.
          </div>
        </div>
        <div style={{ width: "80%", paddingBottom: "2rem" }}>
          Causas:
          <br /> 1. Disparidade de Impacto: A automação pode afetar
          desproporcionalmente trabalhadores de baixa renda e minorias. 2. Falta
          de Educação e Reciclagem: A falta de programas de reciclagem de
          habilidades pode deixar trabalhadores obsoletos. 3. Falta de
          Planejamento Estratégico: Empresas e governos podem não estar
          preparados para lidar com as implicações sociais da automação.
          <div style={{ paddingTop: "2rem" }}>
            Como evitar:
            <br /> 1. Políticas de Educação e Reciclagem: Investir em programas
            de treinamento e educação para ajudar os trabalhadores a adquirir
            novas habilidades. 2. Renda Básica Universal: Explorar a
            implementação de políticas como a renda básica universal para ajudar
            os afetados pela automação. 3. Planejamento Estratégico: Desenvolver
            estratégias para lidar com as mudanças sociais e econômicas
            resultantes da automação.
          </div>
        </div>
      </div>
    </div>
  );
};
