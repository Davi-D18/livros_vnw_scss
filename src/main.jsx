import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { FormDoacao } from "./pages/FormDoacao/FormDoacao.jsx";
import { LivrosDoados } from "./pages/LivrosDoados/LivrosDoados.jsx";
import { Error404 } from "./pages/Error/Error404.jsx";
import { App } from "./App.jsx";

// Rotas das páginas do site
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doacao",
        element: <FormDoacao />,
      },
      {
        path: "/livrosDoados",
        element: <LivrosDoados />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
