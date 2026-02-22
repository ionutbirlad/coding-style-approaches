// twoSumProceduralToImperativeDeclarative.js

// Esercizio #2 — "Two Sum"

// Descrizione del problema
// Data un array di numeri interi e un valore target,
// trovare i due elementi che sommati danno il target.

// Cosa deve fare la funzione
// Restituire gli INDICI dei due elementi che sommati danno target.

// Input/Output attesi
// Input:  array di numeri, numero target
// Output: array con due indici [i, j], oppure null se nessuna coppia trovata

// Edge cases da gestire
// - Array vuoto o con meno di 2 elementi → null
// - Nessuna coppia trovata → null
// - Target raggiungibile con lo stesso elemento due volte (es. [3,3], target 6) → gestito correttamente perché i e j partono da posizioni diverse

// Esempi:
// twoSum([2, 7, 11, 15], 9)   // [0, 1]  → 2 + 7 = 9
// twoSum([1, 4, 3, 6], 7)     // [1, 2]  → 4 + 3 = 7  (prima coppia trovata)
// twoSum([1, 2, 3], 10)       // null
// twoSum([], 5)               // null

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// const res = twoSum([1, 4, 3, 6], 7);
// console.log(res);

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================

// Soluzione con loop espliciti
// Performance ottimizzata

// function twoSum(arr, target) {
//   if (!Array.isArray(arr) || arr.length < 2) return null;

//   let track = new Map();

//   for (const [index, item] of arr.entries()) {
//     const complement = target -item;
//     if (track.has(complement)) return [track.get(complement), index];
//     if (!track.has(item)) track.set(item, index);
//   }

//   return null;
// }

// // const res = twoSum([3, 4], 6);
// const res = twoSum([1, 4, 3, 6], 7);
// console.log(res);

// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================

// Soluzione con metodi array, reduce, filter, etc.
// Espressiva ma comunque efficiente

function twoSum(arr, target) {
  if (!Array.isArray(arr) || arr.length < 2) return null;

  let track = new Map();

  const result = arr.reduce((acc, currVal, index) => {
    const complement = target - currVal;

    if (track.has(complement) && acc.length < 2) acc = [...acc, track.get(complement), index];
    if (!track.has(currVal)) track.set(currVal, index);

    return acc;
  }, []);

  return result.length === 2 ? result : null;
}

// const res = twoSum([3, 4], 6);
const res = twoSum([1, 4, 3, 6], 7);
console.log(res);
