# Project Context - Vanilla JS: From Procedural to Declarative/Imperative

## 📌 Obiettivo del Progetto

Repository di allenamento personale per migliorare la qualità del codice vanilla JavaScript, passando da uno stile **procedurale** (naive, step-by-step) a stili più robusti ed efficienti (**imperativo** e **dichiarativo**).

### Perché questo progetto?

Ho notato che quando uso React o framework, scrivo naturalmente codice dichiarativo perché seguo le regole dell'environment. Ma quando scrivo vanilla JS, ricado spesso in uno stile procedurale ereditato dai miei inizi. 

**Goal**: Sviluppare muscle memory per scrivere codice efficiente ed elegante anche senza framework.

---

## 📁 Struttura del Progetto

```
/
├── SUMMARY.md                    # Concetti chiave, esempi, checklist
├── PROJECT_CONTEXT.md            # Questo file (contesto per tool/AI)
├── exerciseName.js               # Un file per esercizio
└── ...altri esercizi
```

Ogni esercizio ha il suo file separato con naming descrittivo del problema.

---

## 📝 Struttura Standard di un Esercizio

Ogni file di esercizio segue questo schema:

```javascript
// nomeEsercizio.js

// Esercizio #N — "Titolo descrittivo"

// Descrizione del problema
// Cosa deve fare la funzione
// Input/Output attesi
// Edge cases da gestire

// Esempi:
// funzione(input1)  // output1
// funzione(input2)  // output2

// ========================================
// BASELINE: PROCEDURALE (da trasformare)
// ========================================

// Soluzione volutamente naive, step-by-step
// (codice procedurale commentato)

// ========================================
// IMPERATIVO [O(n) o complessità migliore]
// ========================================

// Soluzione con loop espliciti
// Performance ottimizzata
// (la mia implementazione)

// ========================================
// DICHIARATIVO [O(n) o complessità migliore]
// ========================================

// Soluzione con metodi array, reduce, filter, etc.
// Espressiva ma comunque efficiente
// (la mia implementazione)

// ========================================
// NOTE / LEARNINGS
// ========================================

// Cosa ho imparato
// Pattern riconosciuti
// Errori da evitare
```

---

## ✅ Principi Guida

### 1. **Non sacrificare performance per eleganza**
- Dichiarativo è bello, ma deve rimanere O(n)
- Evitare attraversamenti multipli non necessari

### 2. **Input validation sempre presente**
- Controllare tipo e validità input
- Gestire edge cases (null, undefined, array vuoto, etc.)

### 3. **Immutabilità dell'input**
- Non mutare mai l'array/oggetto originale
- Stato interno locale è ok se controllato

### 4. **Chiarezza > Cleverness**
- Codice leggibile batte codice "furbo"
- Nomi variabili descrittivi

---

## 🎯 I 5 Checkpoint per Valutare lo Stile

Prima di considerare finito un esercizio, verifico:

1. **Il codice è tutto sequenziale fin nei minimi step?**  
   → Se sì, probabilmente è procedurale

2. **Ci sono stati/variabili intermedie inutili?**  
   → Se sì, sospetto procedurale

3. **Sto esplicitando troppo invece di astrarre?**  
   → Se sì, procedurale

4. **Sto attraversando i dati più volte senza motivo?**  
   → Se sì, rischio O(n²)

5. **Se cambio scala (input grande), questo codice soffre?**  
   → Se sì, problema di approccio

---

## 📊 Naming Conventions

### File
- `problemNameProceduralToImperativeDeclarative.js`
- camelCase, descrittivo del problema
- Suffisso che indica il tipo di trasformazione

### Funzioni
- `functionNameImperative()` per versione imperativa
- `functionNameDeclarative()` per versione dichiarativa
- Nome chiaro che descrive cosa fa

### Variabili
- `result`, `acc`, `seen`, `count`, `freq` per accumulatori comuni
- Evitare abbreviazioni criptiche (`i`, `j` ok solo in loop semplici)

---

## 🚫 Anti-Pattern da Evitare

- ❌ Nested loops quando si può usare Map/Set
- ❌ `.filter().map()` quando `.reduce()` fa tutto in un passaggio
- ❌ Variabili intermedie che esistono solo per essere reassign
- ❌ Controlli manuali quando esistono metodi built-in
- ❌ One-liner incomprensibili (eleganza ≠ leggibilità)

---

## 💡 Pattern Comuni Riconosciuti

*(Questa sezione si aggiornerà man mano)*

### Rimozione duplicati
- **Imperativo**: `Map` + loop
- **Dichiarativo**: `reduce` con `Map`

### Conteggio frequenze
- **Imperativo**: oggetto + loop
- **Dichiarativo**: `reduce` che costruisce oggetto

---

## 🔄 Workflow di un Esercizio

1. **Ricevo/Creo** problema con versione procedurale
2. **Analizzo** complessità e punti deboli
3. **Implemento** versione imperativa (focus: performance)
4. **Implemento** versione dichiarativa (focus: espressività + performance)
5. **Comparo** e annoto learnings
6. **Aggiungo** al repo con commit descrittivo

---

## 📚 Risorse di Riferimento

- `SUMMARY.md` - Teoria e concetti chiave
- Singoli file esercizi - Esempi pratici progressivi

---

## 🎓 Progress Tracking

*(Da aggiornare man mano)*

**Esercizi completati:** 1
- [x] uniqueInOrder - Rimozione duplicati mantenendo ordine

**Pattern masterizzati:**
- Uso di Map per tracking "seen"
- Reduce per costruzione accumulatore

**Da esplorare:**
- [ ] Algoritmi di sorting
- [ ] Manipolazione stringhe complesse
- [ ] Tree/Graph traversal in vanilla JS
- [ ] Pattern matching avanzato

---

## 🤖 Note per AI/Tools

Quando generi o modifichi esercizi:
- Mantieni sempre la struttura a 3 sezioni (Procedurale, Imperativa, Dichiarativa)
- Includi esempi concreti con input/output
- Commenta i trade-off di ogni approccio
- Non generare soluzioni O(n²) per versioni imperative/dichiarative a meno che non sia inevitabile
- Evidenzia sempre la complessità algoritmica

---

**Ultimo aggiornamento:** 2026-02-09  
**Stato:** In sviluppo attivo 🚧