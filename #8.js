// Esercizio #7 — "Invertire chiavi e valori"

// Descrizione del problema
// Dato un oggetto, restituire un nuovo oggetto con chiavi e valori invertiti.

// Cosa deve fare la funzione
// Ogni chiave diventa valore e ogni valore diventa chiave.

// Input/Output attesi
// Input:  oggetto
// Output: oggetto con chiavi e valori invertiti

// Edge cases da gestire
// - Oggetto vuoto → {}
// - Input non oggetto → null
// - Valori duplicati → l'ultimo valore sovrascrive il precedente

// Esempi:
// invertObject({ a: 1, b: 2, c: 3 })         // { 1: 'a', 2: 'b', 3: 'c' }
// invertObject({ name: 'Alice', age: 30 })    // { Alice: 'name', 30: 'age' }
// invertObject({})                            // {}
// invertObject(null)                          // null

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

function invertObject(obj) {
  if (obj === null || typeof obj !== 'object') return null;

  const result = {};
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    result[obj[keys[i]]] = keys[i];
  }

  return result;
}

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================


// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================
