import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"

import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
// paginas
import Home from "./routes/Posts";
import Imagens from "./routes/Imagens";
import Usuarios from './routes/Usuarios';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/fotos",
        element: <Imagens />,
      },
      {
        path: "/users",
        element: <Usuarios />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
