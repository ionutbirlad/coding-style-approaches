// Esercizio #2 — "Frequency Counter"

// Descrizione del problema
// Data un array di elementi, contare quante volte appare ciascun elemento.

// Cosa deve fare la funzione:
// Restituire un oggetto dove ogni chiave è un elemento dell'array
// e il valore è il numero di occorrenze.

// Input/Output attesi
// Input:  array di elementi (stringhe, numeri)
// Output: oggetto { elemento: occorrenze }

// Edge cases da gestire
// - Array vuoto → {}
// - Input non array → null

// Esempi:
// frequencyCounter(['a', 'b', 'a', 'c', 'b', 'a'])  // { a: 3, b: 2, c: 1 }
// frequencyCounter([1, 2, 1, 3, 2])                  // { 1: 2, 2: 2, 3: 1 }
// frequencyCounter([])                               // {}
// frequencyCounter(null)                             // null

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

// function frequencyCounter(arr) {
//   if (!Array.isArray(arr)) return null;

//   const result = {};

//   for (const item of arr) {
//     if (result[item]) {
//       result[item]++;
//     } else {
//       result[item] = 1;
//     }
//   }

//   return result;
// }

// const res = frequencyCounter(['a', 'b', 'a', 'c', 'b', 'a']);
// console.log(res);

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================

// Soluzione con loop espliciti
// Performance ottimizzata

// function frequencyCounter(arr) {
//   if (!Array.isArray(arr)) return null;
//   if (arr.length === 0) return {};

//   const counter = {};

//   for (const item of arr) {
//     if (!counter[item]) {
//       counter[item] = 1;
//     } else {
//       counter[item]++;
//     }
//   }

//   return counter;
// }

// const res = frequencyCounter(['a', 'b', 'a', 'c', 'b', 'a']);
// console.log(res);

// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================

// Soluzione con metodi array, reduce, filter, etc.
// Espressiva ma comunque efficiente

function frequencyCounter(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return {};

  return arr.reduce((acc, currVal) => {
    if (!acc[currVal]) {
      acc[currVal] = 1;
    } else {
      acc[currVal]++;
    }

    return acc;
  }, {});
}

const res = frequencyCounter(['a', 'b', 'a', 'c', 'b', 'a']);
console.log(res);
