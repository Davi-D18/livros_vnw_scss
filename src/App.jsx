import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* Reaproveita esses componentes do Header e footer para exibir em outras páginas */}
      <Footer />
    </>
  );
}
