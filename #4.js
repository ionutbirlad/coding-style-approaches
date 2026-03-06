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

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) result.push(arr[i]);
  }

  return result;
}

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return [];

  const seen = new Set();
  let result = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item, true);
      result.push(item);
    }
  }

  return result;
}

// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return [];

  const seen = new Set();

  return arr.reduce((acc, currVal) => {
    if (!seen.has(currVal)) {
      seen.add(currVal);
      acc.push(currVal);
    }

    return acc;
  }, []);
}

