// Esercizio #5 — "Merge di due array"

// Descrizione del problema
// Dati due array, restituire un nuovo array che contiene
// tutti gli elementi di entrambi, senza duplicati.

// Cosa deve fare la funzione
// Unire i due array mantenendo l'ordine e rimuovendo i duplicati.

// Input/Output attesi
// Input:  due array di elementi (stringhe, numeri)
// Output: array unificato senza duplicati

// Edge cases da gestire
// - Uno o entrambi gli array vuoti → restituisce l'altro
// - Input non array → null
// - Duplicati tra i due array → elemento appare una sola volta

// Esempi:
// mergeArrays([1, 2, 3], [3, 4, 5])         // [1, 2, 3, 4, 5]
// mergeArrays([1, 2], [])                   // [1, 2]
// mergeArrays([], [])                       // []
// mergeArrays(['a', 'b'], ['b', 'c'])       // ['a', 'b', 'c']
// mergeArrays(null, [1, 2])                 // null

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

// function mergeArrays(arr1, arr2) {
//   if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;

//   const result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     let found = false;
//     for (let j = 0; j < result.length; j++) {
//       if (arr1[i] === result[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) result.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     let found = false;
//     for (let j = 0; j < result.length; j++) {
//       if (arr2[i] === result[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) result.push(arr2[i]);
//   }

//   return result;
// }

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================

function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const rawMergedArr = [...arr1, ...arr2];
  const result = [];
  const seen = new Map();

  for (const item of rawMergedArr) {
    if (!seen.has(item)) {
      seen.set(item, true);
      result.push(item);
    }
  }

  return result;
}

console.log(mergeArrays([1, 2], []));

// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================