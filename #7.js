// Esercizio #6 — "Group by property"

// Descrizione del problema
// Dato un array di oggetti e il nome di una proprietà,
// raggruppare gli oggetti in base al valore di quella proprietà.

// Cosa deve fare la funzione
// Restituire un oggetto dove ogni chiave è un valore della proprietà,
// e il valore è un array di oggetti che hanno quel valore.

// Input/Output attesi
// Input:  array di oggetti, stringa con il nome della proprietà
// Output: oggetto { valoreProprietà: [oggetti] }

// Edge cases da gestire
// - Array vuoto → {}
// - Input non array → null
// - Proprietà non esistente negli oggetti → chiave undefined

// Esempi:
// groupBy([{name: 'Alice', role: 'admin'}, {name: 'Bob', role: 'user'}, {name: 'Carol', role: 'admin'}], 'role')
// { admin: [{name: 'Alice', role: 'admin'}, {name: 'Carol', role: 'admin'}], user: [{name: 'Bob', role: 'user'}] }
//
// groupBy([], 'role')   // {}
// groupBy(null, 'role') // null

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

// function groupBy(arr, prop) {
//   if (!Array.isArray(arr)) return null;

//   const result = {};

//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i][prop];
//     if (!result[key]) {
//       result[key] = [];
//     }
//     result[key].push(arr[i]);
//   }

//   return result;
// }

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================

// function groupBy(arr, prop) {
//   if (!Array.isArray(arr)) return null;
//   if (arr.length === 0) return {};

//   const result = {};

//   for (const item of arr) {
//     if (Object.hasOwn(item, prop)) {
//       const key = item[prop];
//       if (!result[key]) result[key] = [];
//       result[key].push(item);
//     }
//   }

//   return result;
// }

// console.log(groupBy([{name: 'Alice', role: 'admin'}, {name: 'Bob', role: 'user'}, {name: 'Carol', role: 'admin'}], 'role'));

// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================

// function groupBy(arr, prop) {
//   if (!Array.isArray(arr)) return null;
//   if (arr.length === 0) return {};

//   return arr.reduce((acc, currVal) => {
//     if (Object.hasOwn(currVal, prop)) {
//       const key = currVal[prop];
//       if (!acc[key]) acc[key] = [];
//       acc[key].push(currVal);
//     }

//     return acc;
//   }, {});
// }

// console.log(groupBy([{name: 'Alice', role: 'admin'}, {name: 'Bob', role: 'user'}, {name: 'Carol', role: 'admin'}], 'role'));

// ========================================
// ONE-LINER [O(n)]
// ========================================

function groupBy(arr, prop) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return {};

  const result = Object.groupBy(arr.filter(item => prop in item), (item) => item[prop]);

  return result;
}

console.log(groupBy([{name: 'Alice', role: 'admin'}, {name: 'Bob', role: 'user'}, {name: 'Carol', role: 'admin'}], 'role'));
