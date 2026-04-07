// Esercizio #3 — "Literal Types e as const"

// Descrizione del problema
// Hai un oggetto che rappresenta la configurazione di un tema UI
// con valori fissi e predefiniti.

// Cosa devi fare
// 1. Definire un oggetto `theme` con proprietà: color ('primary' | 'secondary' | 'danger'),
//    size ('sm' | 'md' | 'lg'), animated (boolean)
// 2. Usare `as const` sull'oggetto
// 3. Scrivere una funzione `applyTheme` che accetta un parametro
//    del tipo dell'oggetto theme e logga le sue proprietà
// 4. Capire cosa cambia con e senza `as const`

// Output atteso
// applyTheme(theme)
// → "color: primary, size: md, animated: true"

type Theme = {
  color: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  animated: boolean;
}

function applyTheme(theme: Theme) {
  console.log(`
    color: ${theme.color},
    size: ${theme.size},
    animated: ${theme.animated}
  `);
}

const theme = {
  color: 'primary',
  size: 'md',
  animated: true
} as const;

applyTheme(theme);

// Note — Literal Types e as const

// I literal types restringono il tipo di un campo a valori specifici e predefiniti
// invece che al tipo generico (es. 'primary' | 'secondary' | 'danger' invece di string).
// Senza as const, TS inferisce i valori di un object literal come tipi generici
// (string, number, boolean) — incompatibili con un tipo che si aspetta literal types.
// Con as const, TS inferisce i valori esatti come literal types, rendendoli
// compatibili con il tipo atteso.
// Effetto collaterale: as const rende tutte le proprietà readonly a livello di tipo,
// quindi TS non permette riassegnazioni dopo la dichiarazione.
