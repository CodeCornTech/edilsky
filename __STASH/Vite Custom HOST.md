Eccomi\! Per usare un dominio personalizzato come `edilsky.test` o `edilsky.local` e una porta specifica, devi agire su due fronti. Vite da solo non basta, perché il tuo computer (a livello di sistema operativo) deve prima imparare che quel dominio "finto" deve puntare a se stesso (localhost).

Ecco i passaggi diretti e definitivi:

### 1\. Configura Vite (`vite.config.ts`)

Il modo più pulito e professionale è impostare questi parametri direttamente nel file di configurazione di Vite, invece di allungare gli script nel `package.json`.

Apri il tuo `vite.config.ts` (o `.js`) e aggiungi l'oggetto `server`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Visto che lo usi nel package.json

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: 'edilsky.test', // Il tuo dominio locale
    port: 5129,           // La porta che preferisci
    strictPort: true,     // Se true: se la porta 3000 è occupata Vite va in errore, anziché passare alla 3001
  }
})
```

*(Se preferivi farlo via `package.json`, lo script diventava `"dev": "vite --host edilsky.test --port 3000"`, ma te lo sconsiglio, il file di config è molto più leggibile).*

### 2\. Modifica il file "hosts" del sistema operativo

Questo è il trucco magico. Devi dire al tuo PC di reindirizzare il traffico di `edilsky.test` verso `127.0.0.1` (il tuo indirizzo locale).

**Su Windows:**

1.  Apri il menu Start, cerca "Blocco note" (Notepad), cliccaci col tasto destro e seleziona **"Esegui come amministratore"**.
2.  Vai su *File \> Apri* e naviga fino a: `C:\Windows\System32\drivers\etc`
3.  Nel menu a tendina in basso a destra cambia "Documenti di testo (*.txt)" in \*\*"Tutti i file (*.\*)"\*\*.
4.  Apri il file chiamato `hosts`.
5.  Vai in fondo al documento e aggiungi questa riga:
    ```text
    127.0.0.1    edilsky.test
    ```
6.  Salva il file.

**Su Mac / Linux:**

1.  Apri il terminale.
2.  Lancia il comando `sudo nano /etc/hosts` (ti chiederà la password del computer).
3.  Usa le frecce per andare in fondo al file e aggiungi:
    ```text
    127.0.0.1    edilsky.test
    ```
4.  Salva premendo `Ctrl + O` e poi `Invio`, infine esci con `Ctrl + X`.

### 3\. Fatto\!

Ora ti basta lanciare il tuo solito `npm run dev` dal terminale. Vite leggerà la configurazione e potrai sviluppare la tua app aprendo comodamente il browser all'indirizzo:

**[http://edilsky.test:3000](https://www.google.com/search?q=http://edilsky.test:3000)**

> **Consiglio da pro:** Evita di usare domini che finiscono in `.dev` per lo sviluppo locale. I browser moderni (come Chrome) sono programmati per forzare automaticamente il protocollo `https://` su tutti i domini `.dev`. Questo ti causerebbe errori di sicurezza continui. Usa `.test`, `.local` o `.localhost`, che sono sicuri e non forzano l'HTTPS\!