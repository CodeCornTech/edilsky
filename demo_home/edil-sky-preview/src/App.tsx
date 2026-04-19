import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EdilSkyLanding from './EdilSkyLanding';
import SketchViewerApp from './Sketches';
//import Sketches from './HeroOriginalInspired';

// 1. Definisci le tue rotte qui
const router = createBrowserRouter([
    {
        path: "/", // Questo è l'URL principale (es: www.tuosito.com/)
        element: <EdilSkyLanding />,
    },
    {
        path: '/sketches', // La nuova rotta che hai richiesto
        element: <SketchViewerApp />, // Il componente che verrà caricato
    },
  /* Esempio di come aggiungere una nuova rotta:
  {
    path: "/contatti", // (es: www.tuosito.com/contatti)
    element: <ContattiPage />, // Un componente che hai creato
  },
  */
]);

export default function App() {
    // 2. Passa il router al RouterProvider
    return <RouterProvider router={router} />;
}