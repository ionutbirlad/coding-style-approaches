// Esercizio #1 — "Modellare un utente con interface ed estenderla"

// Descrizione del problema
// Devi modellare un sistema con utenti base e utenti admin.
// Un utente admin ha tutte le proprietà di un utente base, più alcune aggiuntive.

// Cosa devi fare
// 1. Definire una interface `User` con: id (number), name (string), email (string)
// 2. Definire una interface `AdminUser` che estende `User` con: role (string), permissions (string[])
// 3. Scrivere una funzione `printUser` che accetta un `User` e logga name ed email
// 4. Verificare che `printUser` accetti anche un `AdminUser` (e capire perché)

// Cosa NON devi usare
// - type (per ora)

// Output atteso
// printUser({ id: 1, name: 'Ionut', email: 'ionut@test.com' })
// → "Ionut — ionut@test.com"

// printUser({ id: 2, name: 'Admin', email: 'admin@test.com', role: 'superadmin', permissions: ['read', 'write'] })
// → "Admin — admin@test.com"
