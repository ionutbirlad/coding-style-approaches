// Esercizio #2 — "Union Types e Narrowing"

// Descrizione del problema
// Hai una funzione che riceve un valore che può essere
// una stringa oppure un numero.

// Cosa devi fare
// 1. Definire il tipo del parametro come union: string | number
// 2. Se è una stringa, restituire la stringa in uppercase
// 3. Se è un numero, restituire il numero moltiplicato per 2
// 4. TS deve essere soddisfatto senza usare `as` o `any`

// Output atteso
// transform('hello')  // 'HELLO'
// transform(5)        // 10

type ParameterType = string | number;

function transform(par: ParameterType) {
  console.log(typeof par === 'string' ? par.toUpperCase() : par * 2);
}

const str = 'hello';
transform(str);

const num = 5;
transform(num);

// Note — Union Types e Narrowing

// Union type (string | number) significa che il parametro può essere uno dei due tipi.
// TS non sa quale dei due è a runtime, quindi non ti lascia chiamare
// metodi specifici di uno solo (es. toUpperCase) senza prima "restringere" il tipo.
// Il narrowing è il processo con cui TS capisce, dentro un blocco condizionale,
// quale tipo specifico ha la variabile — in questo caso tramite typeof.
// Dopo il check typeof === 'string', TS sa che in quel ramo par è una stringa,
// e nel ramo else sa che può essere solo number (l'unico tipo rimanente).

// E un modo per estendere i check a runtime, dove TS non puo arrivare
