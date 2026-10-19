"use client";

import { useMemo, useState } from "react";

type Card = { id: number; name: string; set: string; number: string; rarity: string; price: number; change: number; emoji: string; color: string };
const initialCards: Card[] = [
  { id: 1, name: "Charizard ex", set: "151", number: "199/165", rarity: "Illustrazione speciale", price: 128.5, change: 8.4, emoji: "🔥", color: "orange" },
  { id: 2, name: "Pikachu", set: "Fosche Fiamme", number: "021/191", rarity: "Illustrazione rara", price: 42.9, change: -2.1, emoji: "⚡", color: "yellow" },
  { id: 3, name: "Gengar ex", set: "Lega Paradosso", number: "193/162", rarity: "Illustrazione speciale", price: 76, change: 5.7, emoji: "👻", color: "purple" },
  { id: 4, name: "Mew ex", set: "151", number: "205/165", rarity: "Illustrazione speciale", price: 89.99, change: 1.3, emoji: "🌸", color: "pink" },
  { id: 5, name: "Umbreon VMAX", set: "Evoluzioni Eteree", number: "215/203", rarity: "Illustrazione alternativa", price: 735, change: -1.8, emoji: "🌙", color: "blue" },
  { id: 6, name: "Miraidon ex", set: "Evoluzioni a Paldea", number: "244/198", rarity: "Illustrazione speciale", price: 31.25, change: 3.2, emoji: "🐉", color: "cyan" },
];
const euro = (n: number) => new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

export default function Home() {
  const [cards, setCards] = useState(initialCards);
  const [query, setQuery] = useState("");
  const [watching, setWatching] = useState<number[]>([1, 2, 3, 4]);
  const filtered = useMemo(() => cards.filter(c => watching.includes(c.id) && `${c.name} ${c.set} ${c.rarity}`.toLowerCase().includes(query.toLowerCase())), [cards, watching, query]);
  const total = cards.filter(c => watching.includes(c.id)).reduce((sum, c) => sum + c.price, 0);
  function addCard() {
    const name = window.prompt("Nome della carta da aggiungere alla watchlist:");
    if (!name?.trim()) return;
    const card: Card = { id: Date.now(), name: name.trim(), set: "Aggiunta da te", number: "—", rarity: "Prezzo demo", price: 0, change: 0, emoji: "🃏", color: "blue" };
    setCards(current => [card, ...current]); setWatching(current => [...current, card.id]);
  }
  return <main className="shell">
    <aside className="sidebar"><a className="brand" href="#top"><span className="mark">◉</span> poké<span>price</span></a><small className="label">MENU</small><a className="nav active" href="#dashboard">▦　Panoramica</a><a className="nav" href="#cards">▤　Le mie carte <b>{watching.length}</b></a><a className="nav" href="#cards">⌕　Esplora</a><div className="profile"><i>A</i><div><strong>Allenatore</strong><small>Collezionista</small></div><span>···</span></div></aside>
    <section className="main"><header className="topbar"><div>La tua collezione　/　<strong>Panoramica</strong></div><span className="demo-pill">● DATI DEMO</span></header>
      <div className="content" id="dashboard"><div className="welcome"><div><small className="label">SABATO, 17 OTTOBRE 2026</small><h1>La tua collezione<span>.</span></h1><p>Tutto quello che succede alle tue carte, in un colpo d'occhio.</p></div><button className="primary" onClick={addCard}>＋ Aggiungi carta</button></div>
        <div className="notice"><b>ⓘ　 Anteprima con dati simulati</b><p>I prezzi mostrati sono esempi dimostrativi, non quotazioni di mercato in tempo reale.</p></div>
        <div className="stats"><article><small>VALORE WATCHLIST</small><strong>{euro(total)}</strong><p><em>↗ +4,2%</em>　rispetto alla settimana scorsa</p></article><article><small>CARTE MONITORATE</small><strong>{watching.length}<sub> carte</sub></strong><p>Nel tuo radar</p></article><article><small>VARIAZIONE MEDIA</small><strong>+3,8<sub>%</sub></strong><p><em>▲ In crescita</em>　ultimi 7 giorni</p></article></div>
        <section className="cards" id="cards"><div className="section-heading"><div><h2>Le tue carte <small>{watching.length}</small></h2><p>Segui i prezzi delle carte che ami.</p></div><button className="link-button" onClick={addCard}>＋ Aggiungi carta</button></div>
          <div className="toolbar"><label>⌕ <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Cerca una carta..." /></label><button>Filtri　☷</button><button className="sort">Prezzo: più alto　⌄</button></div>
          <div className="grid">{filtered.map(card => <article className="card" key={card.id}><div className={`art ${card.color}`}><span className="set">{card.set}</span><span className="emoji">{card.emoji}</span><span className="rarity">✦ {card.rarity}</span><button aria-label="Rimuovi dalla watchlist" onClick={() => setWatching(current => current.filter(id => id !== card.id))}>♥</button></div><div className="details"><h3>{card.name}</h3><p>{card.set}　·　{card.number}</p><div className="price"><div><small>PREZZO MEDIO</small><strong>{euro(card.price)}</strong></div><em className={card.change < 0 ? "down" : ""}>{card.change >= 0 ? "↗" : "↘"} {Math.abs(card.change)}%</em></div></div></article>)}</div>
          {filtered.length === 0 && <div className="empty">Nessuna carta trovata. Prova un altro nome o aggiungi una carta.</div>}<div className="foot">Mostrate {filtered.length} di {watching.length} carte <span>Prezzi di esempio in EUR</span></div>
        </section><footer>PokéPrice è un progetto dimostrativo indipendente e non è affiliato a The Pokémon Company.<span>Creato per gli allenatori, con ♥</span></footer>
      </div></section>
  </main>;
}
