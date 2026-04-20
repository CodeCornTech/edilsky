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
    // Spalmiamo l'array di percorsi e creiamo un oggetto rotta per ciascuno
    ...['/sketches', '/preview'].map(path => ({
        path, // assegna la stringa corrente al path
        element: <SketchViewerApp />, // assegna il componente
    })),
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