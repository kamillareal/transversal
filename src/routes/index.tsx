import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Conclusao } from "../pages/Conclusao";
import { ImpactoNoMercado } from "../pages/ImpactoNoMercado";
import { Introducao } from "../pages/Introducao";
import { PrivacidadeDeDados } from "../pages/PrivacidadeDeDados";
import { RacismoAlgoritmico } from "../pages/RacismoAlgoritmico";
import { Introducaoo } from "../pages/introducao2";
import { RoutesEnum } from "./enum";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Home} element={<Introducao />} />
        <Route path={RoutesEnum.introducao} element={<Introducaoo />} />
        <Route
          path={RoutesEnum.racismoAlgoritmico}
          element={<RacismoAlgoritmico />}
        />
        <Route
          path={RoutesEnum.privacidadeDeDados}
          element={<PrivacidadeDeDados />}
        />
        <Route
          path={RoutesEnum.impactoNoMercado}
          element={<ImpactoNoMercado />}
        />
        <Route path={RoutesEnum.conclusao} element={<Conclusao />} />
      </Routes>
    </BrowserRouter>
  );
}
