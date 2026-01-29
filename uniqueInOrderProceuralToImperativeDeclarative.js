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

uniqueInOrderImperative(["a","b","a","c","b"]);