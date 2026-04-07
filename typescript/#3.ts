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
