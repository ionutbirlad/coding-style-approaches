// Esercizio #4 — "Generics"

// Descrizione del problema
// Hai bisogno di una funzione che wrappa un valore qualsiasi
// in un oggetto con una proprietà `data`, mantenendo il tipo originale.

// Cosa devi fare
// 1. Scrivere una funzione generica `wrap` che accetta un valore di tipo T
//    e restituisce un oggetto { data: T }
// 2. TS deve inferire automaticamente T dal valore passato
//    senza bisogno di specificarlo esplicitamente
// 3. Verificare che il tipo di ritorno sia corretto nei seguenti casi

// Output atteso
// wrap('hello')  // { data: 'hello' } — tipo: { data: string }
// wrap(42)       // { data: 42 }      — tipo: { data: number }
// wrap({ id: 1}) // { data: { id: 1 }} — tipo: { data: { id: number } }

function wrap<T>(arg: T): { data: T } {
  return { data: arg }
}

const res1 = wrap('hello');
const res2 = wrap(42);
const res3 = wrap({ id: 1});

console.log(res1);
console.log(res2);
console.log(res3);

// Note — Generics

// I generics permettono di scrivere funzioni (o tipi) che funzionano
// con qualsiasi tipo, mantenendo però la precisione del tipo originale.
// T è un placeholder che TS sostituisce con il tipo reale al momento della chiamata,
// inferendolo automaticamente dal valore passato — senza bisogno di specificarlo esplicitamente.
// Il vantaggio rispetto a `any` è che il tipo di ritorno rimane collegato al tipo di input:
// wrap('hello') restituisce { data: string }, non { data: any }.
