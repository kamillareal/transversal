import { Fragment } from "react";

export const RacismoAlgoritmico = () => {
  return (
    <Fragment>
      <div>
        O racismo algorítmico refere-se ao viés discriminatório presente em
        sistemas de inteligência artificial que podem perpetuar preconceitos
        raciais. Isso acontece quando os algoritmos, muitas vezes sem intenção,
        tomam decisões ou fazem recomendações que afetam desproporcionalmente
        grupos étnicos ou raciais de maneira negativa. Este problema destaca a
        importância de garantir que os algoritmos sejam justos e imparciais,
        independentemente da origem étnica das pessoas. Exemplo: Em 2018, foi
        revelado que o software de reconhecimento facial da Amazon tinha taxas
        de erro maiores em indivíduos com pele mais escura, gerando preocupações
        significativas de discriminação racial.
      </div>
      <div>
        Causas: 1. Viés nos Dados: Os algoritmos de IA muitas vezes aprendem com
        dados históricos, refletindo assim os preconceitos existentes na
        sociedade. 2. Treinamento Deficiente: Algoritmos podem não ser treinados
        adequadamente em conjuntos de dados diversificados, exacerbando o viés.
        3. Falta de Diversidade na Indústria: A falta de diversidade na criação
        de algoritmos pode resultar na falta de consideração de perspectivas
        variadas.
      </div>
      <div>
        Como evitar: 1. Dados Diversificados: Utilizar conjuntos de dados
        abrangentes e diversificados para treinar algoritmos e identificar e
        mitigar viés nos dados. 2. Auditoria de Algoritmos: Realizar auditorias
        regulares para identificar e corrigir viés nos algoritmos. 3.
        Diversidade na Indústria: Promover a diversidade na indústria de IA para
        trazer perspectivas variadas no desenvolvimento de algoritmos.
      </div>
    </Fragment>
  );
};
