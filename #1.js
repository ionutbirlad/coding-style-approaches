// Esercizio #1 — “Rimuovi duplicati mantenendo l’ordine”

// Scrivi una funzione che prende un array e restituisce un nuovo array con:
// 	•	gli elementi senza duplicati
// 	•	mantenendo l’ordine della prima occorrenza
// 	•	se input non valido → []

// Esempi:

// uniqueInOrder([1, 2, 2, 3, 1])       // [1, 2, 3]
// uniqueInOrder(["a","b","a","c","b"]) // ["a","b","c"]
// uniqueInOrder([])                   // []
// uniqueInOrder(null)                 // []

// Baseline: soluzione PROCEDURALE (da trasformare)

// Questa è volutamente “passo-passo” e non ottimizzata.

// function uniqueInOrder(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) return [];

//   const result = [];
//   let i = 0;

//   while (i < arr.length) {
//     const current = arr[i];

//     // controllo manuale se esiste già in result
//     let alreadyExists = false;
//     let j = 0;

//     while (j < result.length) {
//       if (result[j] === current) {
//         alreadyExists = true;
//         break;
//       }
//       j++;
//     }

//     if (!alreadyExists) {
//       result.push(current);
//     }

//     i++;
//   }

//   return result;
// }

// Il tuo compito
// 	1.	Trasformala in IMPERATIVA (versione più pulita/efficiente, ma sempre con loop)
// 	2.	Trasformala in DICHIARATIVA (pipeline tipo filter, reduce, ecc.)

// 📌 Vincoli:
// 	•	usa === (come sopra)
// 	•	non mutare l’array originale
// 	•	mantieni l’ordine delle prime occorrenze


// IMPERATIVO
const uniqueInOrderImperative = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const seen = new Map();
  let result = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.set(item, true);
      result.push(item);
    }
  }
  
  return result;
}

// DICHIARATIVA
const uniqueInOrderDeclarative = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const seen = new Map();

  return arr.reduce((acc, currVal) => {
    if (!seen.has(currVal)) {
      seen.set(currVal, true);
      acc.push(currVal);
    }

    return acc;
  }, []);
}

uniqueInOrderDeclarative(["a","b","a","c","b"]);


/**
 * L’immutabilità pura è raramente necessaria nel mondo reale.
 * È importante non mutare input e non avere side-effects esterni,
 * mentre la mutabilità dello stato interno, se locale e controllata,
 * è generalmente accettabile.
 */


// esempi che non hanno senso anche se giustissimi, ma piu lenti e difficili da capire e gestire

// 🔬 Versione dichiarativa + immutabile pura

// const uniqueInOrderPure = (arr) =>
//   Array.isArray(arr)
//     ? arr.reduce(
//         (acc, item) =>
//           acc.result.includes(item)
//             ? acc
//             : {
//                 seen: [...acc.seen, item],
//                 result: [...acc.result, item],
//               },
//         { seen: [], result: [] }
//       ).result
//     : [];

// 🔬 Versione imperativa + immutabile pura

// const uniqueInOrderImperativePure = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) return [];

//   let result = [];

//   for (const item of arr) {
//     if (!result.includes(item)) {
//       result = [...result, item]; // nuova copia ogni volta
//     }
//   }

//   return result;
// };