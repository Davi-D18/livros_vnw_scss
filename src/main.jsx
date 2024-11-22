import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home/Home.jsx';
import { FormDoacao } from './pages/FormDoacao/FormDoacao.jsx';
import { LivrosDoados } from './pages/LivrosDoados/LivrosDoados.jsx';
import { App } from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
