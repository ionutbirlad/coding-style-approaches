// Esercizio #8 — "Contare occorrenze con oggetto accumulatore"

// Descrizione del problema
// Dato un array di elementi, contare quante volte appare ciascun elemento
// usando un oggetto come accumulatore.

// Cosa deve fare la funzione
// Restituire un oggetto dove ogni chiave è un elemento dell'array
// e il valore è il numero di occorrenze.

// Input/Output attesi
// Input:  array di elementi (stringhe, numeri)
// Output: oggetto { elemento: occorrenze }

// Edge cases da gestire
// - Array vuoto → {}
// - Input non array → null

// Esempi:
// countOccurrences(['a', 'b', 'a', 'c', 'b', 'a'])  // { a: 3, b: 2, c: 1 }
// countOccurrences([1, 2, 1, 3, 2])                  // { 1: 2, 2: 2, 3: 1 }
// countOccurrences([])                               // {}
// countOccurrences(null)                             // null

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

function countOccurrences(arr) {
  if (!Array.isArray(arr)) return null;

  const result = {};

  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]]++;
    }
  }

  return result;
}

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================


// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================
