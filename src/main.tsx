import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Header from './app/components/Header';
import Collections from './app/pages/Collections';
import Men from './app/pages/Men';
import Women from './app/pages/Women';
import About from './app/pages/About';
import Contact from './app/pages/Contact';
import { store } from './app/redux/store';
import { Provider } from 'react-redux'
import ModalProvider from './app/context/modalContext';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
)
