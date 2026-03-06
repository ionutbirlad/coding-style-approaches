// Esercizio #4 — "Trovare massimo/minimo"

// Descrizione del problema
// Dato un array di numeri, trovare il valore massimo e minimo.

// Cosa deve fare la funzione
// Restituire un oggetto con le proprietà max e min.

// Input/Output attesi
// Input:  array di numeri
// Output: oggetto { max, min }

// Edge cases da gestire
// - Array vuoto → null
// - Input non array → null
// - Array con un solo elemento → { max: elemento, min: elemento }

// Esempi:
// findMinMax([3, 1, 7, 2, 9])   // { max: 9, min: 1 }
// findMinMax([5])               // { max: 5, min: 5 }
// findMinMax([])                // null
// findMinMax(null)              // null

// Descrizione del problema
// Data un array di elementi, contare quante volte appare ciascun elemento.

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

function findMinMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { max, min };
}

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================


// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================
