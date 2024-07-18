import { createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout';
import App from './App';
import Projects from './Views/Projects';
import Tecnologies from './Views/Tecnologies';
import About from './Views/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Tecnologies',
        element: <Tecnologies />,
      },
      {
        path: 'About',
        element: <About />,
      },
    ],
  },
]);
