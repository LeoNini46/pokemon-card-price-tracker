# Pokémon Card Price Tracker

Prototipo Next.js per seguire una watchlist di carte Pokémon.

## Avvio su Windows (PowerShell)

1. Usa Node.js 20.9 o successivo (consigliato: LTS corrente).
2. Apri PowerShell nella cartella del progetto.
3. Esegui `npm.cmd install` per installare le dipendenze.
4. Esegui `npm.cmd run dev`.
5. Apri <http://localhost:3000> nel browser.

In PowerShell usa `npm.cmd` se il comando `npm` viene bloccato dalla Execution Policy.

## Cosa funziona

- Dashboard responsive e navigabile.
- Ricerca delle carte mostrate.
- Aggiunta alla watchlist tramite il pulsante “Aggiungi carta”.
- Rimozione di una carta dalla watchlist.
- Totale dei prezzi demo delle carte monitorate.

## Limiti del prototipo

I dati e le variazioni di prezzo sono simulati nel codice: non vengono letti da marketplace e non sono quotazioni correnti. Le modifiche alla watchlist vivono solo nella sessione del browser e si azzerano al ricaricamento. Filtri e ordinamento sono solo elementi grafici. Non servono account, API key o altri segreti.

Per passare a dati reali serviranno una fonte autorizzata con prezzi e immagini, un backend per aggiornamenti e persistenza, e la verifica delle condizioni d'uso della fonte scelta.

## GitHub e Vercel

Questo progetto non è collegato a un repository GitHub.

1. Su GitHub crea un nuovo repository pubblico chiamato `pokemon-card-price-tracker`, senza aggiungere README, licenza o `.gitignore` (sono già in questa cartella).
2. Apri PowerShell nella cartella del progetto e usa:

   ```powershell
   git init
   git add .
   git commit -m "Primo prototipo PokéPrice"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/pokemon-card-price-tracker.git
   git push -u origin main
   ```

   Sostituisci `TUO-USERNAME` con il tuo nome GitHub. GitHub potrebbe chiederti di autenticarti.
3. In Vercel scegli **Add New → Project**, importa il repository appena creato e premi **Deploy**. I valori predefiniti Next.js sono sufficienti; per questa demo non aggiungere variabili d'ambiente o segreti.
