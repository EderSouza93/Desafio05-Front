import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';
import { ToastProvider } from './components/Notifications/Notifications';
import Home from './views/Home/Home';
import Livros from './views/Livros/Livros';
import LivrosCadastro from './views/LivrosCadastro/LivrosCadastro';
import LivrosEdicao from './views/LivrosEdicao/LivrosEdicao';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/livros",
    element: <Livros/>,
  },
  {
    path: "/livros/cadastro",
    element: <LivrosCadastro />,
  },
  {
    path: "/livros/edicao/:livroId",
    element: <LivrosEdicao />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider
      position='top-right'
      autoClose={ 4000 }
      theme='colored'
      hideProgressBar={ false }
      closeOnClick={ true }
      pauseOnHover={ true }
      draggable={ true }
    >
    <RouterProvider router={router} />
    </ToastProvider>
  </React.StrictMode>,
)
