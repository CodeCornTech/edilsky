Per gestire la navigazione e registrare delle rotte nella tua applicazione React, lo standard assoluto è utilizzare la libreria **React Router**.

Ecco i passaggi diretti per implementarlo partendo dal codice che hai fornito.

### 1. Installa la libreria

Per prima cosa, devi aggiungere `react-router-dom` al tuo progetto. Apri il terminale e lancia uno di questi comandi (a seconda del tuo package manager):

```bash
npm install react-router-dom
```

_(Usa `yarn add react-router-dom` o `pnpm add react-router-dom` se non usi npm)._

### 2. Aggiorna `App.tsx` (Registrazione delle Rotte)

Il metodo più moderno e raccomandato per gestire le rotte oggi è usare `createBrowserRouter`. Manterremo il tuo componente `EdilSkyLanding` come pagina principale (la "Home") e prepareremo lo spazio per altre pagine.

Modifica il tuo file `App` in questo modo:

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EdilSkyLanding from './HeroOriginalInspired';

// 1. Definisci le tue rotte qui
const router = createBrowserRouter([
    {
        path: '/', // Questo è l'URL principale (es: www.tuosito.com/)
        element: <EdilSkyLanding />,
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
```

### 3. Il file principale (Nessuna modifica richiesta)

La cosa ottima di questo approccio è che **il tuo file `main.tsx` o `index.tsx` non ha bisogno di essere toccato**. Il codice che hai postato va già perfettamente bene:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
```

### Come navigare tra le rotte

Un dettaglio fondamentale: quando vorrai creare dei pulsanti o dei menu per navigare tra le pagine che registrerai, **non usare il classico tag HTML `<a>`**, perché ricaricherebbe l'intera pagina.

Usa invece il componente `Link` fornito da React Router:

```tsx
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contatti">Contattaci</Link>
        </nav>
    );
}
```

### SKETCHES

Ottima idea! Integrare il tuo visualizzatore di sketch è facilissimo e si adatta perfettamente alla struttura che abbiamo appena creato.

Tutto quello che devi fare è importare il componente `SketchViewerApp` all'interno del tuo file `App.tsx` e aggiungere un nuovo blocco al router.

Ecco come diventa il tuo **`App.tsx`**:

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Importa la Home
import EdilSkyLanding from './HeroOriginalInspired';
// Importa il tuo nuovo visualizzatore di sketch (assicurati che il percorso sia corretto)
import SketchViewerApp from './Sketches';

const router = createBrowserRouter([
    {
        path: '/',
        element: <EdilSkyLanding />,
    },
    {
        path: '/sketches', // La nuova rotta che hai richiesto
        element: <SketchViewerApp />, // Il componente che verrà caricato
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
```

### Un paio di consigli al volo:

1. **Il percorso del file:** Ho supposto che `Sketches.tsx` si trovi nella stessa cartella di `App.tsx` (da qui `import SketchViewerApp from './Sketches';`). Se l'hai messo in una cartella diversa, ricordati di aggiornare il percorso (es: `./components/Sketches`).
2. **Navigazione:** Se vuoi mettere un pulsante sulla tua Landing Page (`EdilSkyLanding`) per portare gli utenti agli sketch, ti basterà usare il componente `<Link>` di React Router così:

    ```tsx
    import { Link } from 'react-router-dom';

    // Dentro il tuo componente EdilSkyLanding:
    <Link to="/sketches" className="tue-classi-css">
        Vai agli Sketch
    </Link>;
    ```

Il codice che hai scritto per `Sketches.tsx` è eccellente: usa `import.meta.glob` di Vite che è perfetto per caricare dinamicamente tutti i file da una cartella senza doverli importare a mano uno per uno. Non devi modificare nulla al suo interno per farlo funzionare con la rotta!
