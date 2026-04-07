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

interface User {
  id: number;
  name: string;
  email: string;
}

interface AdminUser extends User {
  role: string;
  permissions: string[];
}

function printUser(user: User) {
  console.log(`
    ${user.name} - ${user.email}
  `);
}

const user: User = { id: 1, name: 'Ionut', email: 'ionut@test.com' };
printUser(user);

const adminUser: AdminUser = { id: 2, name: 'Admin', email: 'admin@test.com', role: 'superadmin', permissions: ['read', 'write'] };
printUser(adminUser);

// Note — Structural typing e extends

// Quando una interface estende un'altra, è un suo sottotipo.
// TS non guarda il nome del tipo ma la sua "forma" (structural typing):
// se AdminUser ha tutte le proprietà che User richiede, è compatibile con User.
// Quindi printUser(user: User) accetta anche AdminUser senza bisogno di User | AdminUser.
//
// Eccezione: l'excess property checking.
// Se passi un object literal direttamente, TS controlla che non ci siano
// proprietà extra rispetto al tipo atteso — e lancia errore.
// Se invece assegni prima a una variabile tipata (const admin: AdminUser = ...)
// e poi la passi, l'errore sparisce — torna a valere solo lo structural typing.
