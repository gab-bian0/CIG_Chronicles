# CIG — scheletro tecnico

Prototipo giocabile realizzato con **Phaser 3**, **TypeScript** e **Vite**. Non richiede immagini esterne: personaggi, ambienti e interfaccia sono generati con forme geometriche.

## Requisiti e avvio locale

- Node.js 20 o successivo
- npm

```bash
npm install
npm run dev
```

Aprire l'indirizzo mostrato da Vite nel terminale.

## Build di produzione

```bash
npm run build
```

La versione pronta per la pubblicazione viene creata in `dist/`. Per provarla localmente:

```bash
npm run preview
```

## Controlli

- Movimento: frecce oppure WASD
- Conferma, dialoghi e attacco: spazio
- Inizio: Invio o clic
- Salvataggio rapido: P (il gioco salva anche nei passaggi importanti)

## Struttura

```text
src/
  core/       EventBus, GameState e SaveManager
  data/       dialoghi, flag missione e mappe placeholder JSON
  scenes/     Boot, Prologue, Title, World e Battle
```

Il flusso dimostrativo comprende il Doc Book Cafe, il tavolo di Gabri/J/Ciollo, l'uscita al Pavaglione, il duello tutorial, la **Ciola di Mogano** e il riferimento alla **Ciola Albina**. Il salvataggio usa `localStorage`.

## Deploy su GitHub Pages

Il progetto include `.github/workflows/deploy-pages.yml`. Per pubblicarlo:

1. creare un repository GitHub e caricare questi file sul branch `main`;
2. aprire **Settings → Pages** nel repository;
3. in **Build and deployment**, scegliere **GitHub Actions** come sorgente;
4. eseguire il workflow oppure effettuare un nuovo push su `main`.

La configurazione Vite usa `base: './'`, quindi funziona anche nel sottopercorso del repository (`https://utente.github.io/nome-repository/`) senza dover cambiare il nome del progetto.

## Sviluppi successivi

I file in `src/data/maps/` sono placeholder leggibili dal progetto e pronti per essere sostituiti o ampliati con mappe esportate da Tiled. Le scene sono già separate, così si possono aggiungere asset, collisioni, animazioni e un sistema di combattimento completo senza cambiare il punto d'ingresso.
