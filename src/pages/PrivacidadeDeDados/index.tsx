import { Fragment } from "react";
import privacyData from "../../assets/dataPrivacy.png";
import AppBarHeader from "../../shared/components/app-bar";
import { Container, Font, Gap } from "../styles";

export const PrivacidadeDeDados = () => {
  return (
    <Fragment>
      <AppBarHeader></AppBarHeader>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "80%",
          flexDirection: "row-reverse",
        }}
      >
        <img
          style={{ width: "100%", paddingTop: "5rem" }}
          src={privacyData}
        ></img>
        <Container>
          <h2 style={{ padding: "2rem 0 0 4rem", color: "rgba(0,0,0,0.7)" }}>
            Privacidade de dados
          </h2>
          <Font>
            A privacidade de dados diz respeito à proteção dos dados pessoais e
            sensíveis dos indivíduos contra uso indevido ou divulgação não
            autorizada. Este tópico é essencial na era da IA, onde a coleta e
            análise de dados são onipresentes. A questão central aqui é como
            garantir que as empresas e organizações coletem e utilizem os dados
            das pessoas de maneira ética, transparente e de acordo com suas
            preferências. Exemplo: O escândalo do Facebook-Cambridge Analytica
            em 2018 expôs como dados pessoais foram indevidamente utilizados
            para influenciar eleições e propagar mensagens políticas.
          </Font>
          <Font>
            Causas:
            <Gap>
              1. Falta de Consentimento Informado: Muitas vezes, os usuários não
              são adequadamente informados sobre como seus dados serão usados.
            </Gap>
            <Gap>
              2. Modelos de Negócios Predatórios: Empresas podem coletar dados
              excessivos para fins de lucro sem considerar a privacidade.
            </Gap>
            <Gap>
              3. Falta de Regulamentação Adequada: A ausência de regulamentação
              rigorosa permite abusos de dados.
            </Gap>
          </Font>
          <Font>
            Como evitar:
            <Gap>
              1. Consentimento Transparente: Empresas devem obter consentimento
              informado dos usuários para coletar e usar dados.{" "}
            </Gap>
            <Gap>
              2. Regulamentação Forte: Estabelecer regulamentações robustas que
              protejam os direitos de privacidade dos cidadãos.
            </Gap>
            <Gap>
              3. Minimização de Dados: Coletar apenas os dados estritamente
              necessários e armazená-los de forma segura.
            </Gap>
          </Font>
        </Container>
      </div>
    </Fragment>
  );
};
