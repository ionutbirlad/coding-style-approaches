# Algoritmi & Pattern da studiare

## Case study: Canonical (esercizio fallito)

Il problema richiedeva di implementare una calcolatrice in **prefix notation** (notazione polacca) — dove l'operatore precede gli operandi, es. `+ 3 4` invece di `3 + 4`.

La soluzione naturale usa lo **stack esplicito**: scorri i token da destra a sinistra, push dei numeri, quando trovi un operatore pop due numeri, applica l'operazione, push del risultato.

**Differenze rispetto a Two Sum:**
- Il dichiarativo qui è forzato e inutile — questo problema è intrinsecamente sequenziale con stato mutabile
- Richiede di conoscere già il pattern: non ci arrivi ragionando da solo sotto pressione
- Two Sum invece è deducibile anche senza conoscerlo in anticipo

**Lezione:** esistono due tipi di difficoltà negli esercizi algoritmici. Quelli deducibili (Two Sum, Frequency Counter) e quelli che richiedono conoscenza preliminare del pattern (Stack + Prefix Notation, Sliding Window). Per i secondi non basta ragionare — devi averli già visti.

---


## Pattern fondamentali

### 1. Frequency Counter
Usa un oggetto o Map per contare occorrenze ed evitare loop annidati.
Complessità: O(n)
Esercizi: Frequency Counter, Two Sum, rimuovere duplicati

---

### 2. Two Pointers
Due indici che scorrono l'array da posizioni diverse (entrambi da sinistra, oppure uno da sinistra e uno da destra).
Complessità: O(n)
Esercizi: palindromi, somme su array ordinati

---

### 3. Stack Esplicito
Array usato come stack (push/pop) per tenere traccia di elementi durante la scansione.
Complessità: O(n)
Esercizi: Valid Parentheses, Prefix/Postfix notation (calcolatrice Canonical)

**Pattern calcolatrice Canonical:**
- Scorri i token da destra a sinistra
- Se è un numero → push sullo stack
- Se è un operatore → pop due numeri, applica operazione, push del risultato
- Alla fine lo stack contiene il risultato

---

### 4. Sliding Window
Una "finestra" di dimensione k che scorre sull'array senza riscorrere da capo.
Complessità: O(n)
Esercizi: massima somma di sottoarray, sottostringa più lunga senza ripetizioni

---

### 5. Binary Search
Ricerca su array ordinato dimezzando lo spazio di ricerca ad ogni iterazione.
Complessità: O(log n)
Esercizi: trovare un elemento in array ordinato, trovare il minimo/massimo con condizione

---

## Priorità per TestGorilla

Alta priorità: Frequency Counter, Two Pointers
Media priorità: Stack Esplicito, Sliding Window
Bassa priorità: Binary Search

---

## Lista esercizi da completare

### Array manipulation
- [ ] Two Sum ✅
- [ ] Frequency Counter (conta occorrenze)
- [ ] Rimuovere duplicati
- [ ] Trovare massimo/minimo
- [ ] Merge di due array

### Oggetti come hashmap
- [ ] Group by property
- [ ] Invertire chiavi e valori
- [ ] Contare occorrenze con oggetto accumulatore

### Concetti da saper spiegare
- [ ] Big O base: O(n) vs O(n²)
- [ ] Quando usare oggetto vs array
- [ ] Edge cases: array vuoto, input null/undefined