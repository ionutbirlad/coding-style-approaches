// Esercizio #3 — "Rimuovere duplicati"

// Descrizione del problema
// Dato un array con elementi ripetuti, restituire un nuovo array
// con ogni elemento presente una sola volta.

// Cosa deve fare la funzione
// Restituire un array senza duplicati, mantenendo l'ordine di prima apparizione.

// Input/Output attesi
// Input:  array di elementi (stringhe, numeri)
// Output: array senza duplicati

// Edge cases da gestire
// - Array vuoto → []
// - Input non array → null
// - Array senza duplicati → restituisce array identico

// Esempi:
// removeDuplicates([1, 2, 1, 3, 2])           // [1, 2, 3]
// removeDuplicates(['a', 'b', 'a', 'c', 'b']) // ['a', 'b', 'c']
// removeDuplicates([1, 2, 3])                 // [1, 2, 3]
// removeDuplicates([])                        // []
// removeDuplicates(null)                      // null

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return null;

  const result = [];

  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item);
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
