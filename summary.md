# Stili di Programmazione: Procedurale, Imperativo, Dichiarativo

## 🎯 Obiettivo

Migliorare la capacità di scrivere codice efficiente ed elegante in vanilla JavaScript, passando da uno stile procedurale a approcci più robusti (imperativo/dichiarativo).

---

## 📊 I Tre Stili di Codice

Tralasciando le sfumature, esistono praticamente 3 tipi di stili:

### 1. **Procedurale** 
Il più naive, passo-passo

### 2. **Imperativo**
- Non sempre il massimo per codebase (dipende dal caso)
- Ottimo per problemi algoritmici tipo LeetCode
- Performance migliore: O(n) invece di O(n²)

### 3. **Dichiarativo**
- In teoria il migliore
- Non O(n²)
- Più ordinato e implicitamente più robusto
- Si valuta caso per caso

---

## 🔍 Autoconsapevolezza

**Cosa ho capito su di me:**

Quando uso React o un framework/libreria, scrivo naturalmente codice dichiarativo perché seguo le regole dell'environment. 

**Ma** quando devo scrivere codice nudo (vanilla JS), parto sempre procedurale - eredità di quando ho iniziato la mia carriera, anche se ora conosco molto meglio tutte le funzionalità del linguaggio.

**Obiettivo:** Passare naturalmente a dichiarativo/imperativo invece che procedurale.

---

## ✅ I 5 Punti per Orientarsi

Questi checkpoint aiutano a capire se sto seguendo la strada giusta:

1. **Il codice è tutto sequenziale fin nei minimi step?**  
   → Probabilmente sto scrivendo procedurale

2. **Faccio uso di stati/variabili intermedie?**  
   → Molto probabilmente procedurale

3. **Sto esplicitando troppo i vari passaggi invece di astrarre?**  
   → Procedurale

4. **Sto concatenando tante funzioni soprattutto built-in?**  
   → Sospetto procedurale

5. **Extra: Sento odore di O(n²)?**  
   → Probabile procedurale

---

## 💡 Le 5 Domande Chiave

### 1️⃣ Sto descrivendo il risultato o i passaggi?
- **risultato** → dichiarativo ✅
- **passaggi** → procedurale ❌

### 2️⃣ Ho stato intermedio che potrei eliminare?
- **sì** → sospetto procedurale ❌
- **no** → bene ✅

### 3️⃣ Sto attraversando i dati più volte senza motivo?
- **sì** → rischio O(n²) ❌
- **no** → ok ✅

### 4️⃣ Ogni passaggio ha un nome/ruolo chiaro?
- **sì** → dichiarativo sano ✅
- **no** → spaghetti ❌

### 5️⃣ Se cambio scala, questo codice soffre?
- **sì** → problema di approccio ❌
- **no** → sei sulla strada giusta ✅

---

## 📝 Esempio Pratico: `firstUniqueChar`

Trova il primo carattere unico in una stringa.

### ❌ PROCEDURALE [O(n²)]

```javascript
function firstUniqueChar(string) {
  if (!string || string.length === 0) return null;

  let arrString = string.split('');
  const duplicatedCharsArr = string
    .split('')
    .filter((item, pos) => arrString.indexOf(item) !== pos);

  const firstUniqueChar = arrString.filter(
    (char) => !duplicatedCharsArr.includes(char),
  )[0];

  const result = firstUniqueChar ?? null;

  return result;
}
```

**Problemi:**
- Variabili intermedie inutili
- Troppi attraversamenti dell'array
- O(n²) complessità

---

### ❌ ULTRA DICHIARATIVA [O(n²)]

```javascript
const firstUniqueChar = (str) =>
  typeof str !== 'string' || str.length === 0
    ? null
    : ([...str].find((char) => [...str].filter((c) => c === char).length === 1) ?? null);
```

**Problemi:**
- Elegante ma inefficiente
- Ancora O(n²)
- Difficile da leggere

---

### ⚠️ FUNZIONALE PURO [O(n²)]

```javascript
const firstUniqueChar = (str) => {
  if (typeof str !== 'string' || str.length === 0) return null;

  return [...str].find((ch) => [...str].filter((c) => c === ch).length === 1) ?? null;
};
```

**Problemi:**
- Più leggibile della versione ultra-dichiarativa
- Ma ancora O(n²)

---

### ✅ IMPERATIVA [O(n)]

```javascript
function firstUniqueChar(str) {
  if (typeof str !== 'string' || str.length === 0) return null;

  const count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of str) {
    if (count[char] === 1) return char;
  }

  return null;
}
```

**Vantaggi:**
- O(n) complessità
- Due passaggi chiari
- Efficiente e leggibile

---

### ✅ DICHIARATIVA [O(n)]

```javascript
const firstUniqueChar = (str) => {
  if (typeof str !== "string" || str.length === 0) return null;

  const freq = [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return [...str].find(char => freq[char] === 1) ?? null;
};
```

**Vantaggi:**
- O(n) complessità
- Dichiarativa ma efficiente
- Due passaggi ben definiti: costruisci frequenze → trova primo unico

---

## 🏆 Verità Chiave

> **Il codice "buono" non è quello più elegante,  
> ma quello che dice chiaramente cosa sta facendo  
> con il minor numero di attraversamenti dei dati.**

---

## 📌 Takeaway Finale

- **Procedurale**: naive, step-by-step, spesso O(n²)
- **Imperativo**: efficiente, esplicito, buon controllo del flusso
- **Dichiarativo**: espressivo, ma deve rimanere efficiente (non sacrificare performance per eleganza)

**La chiave**: equilibrio tra espressività e performance. Non esiste "lo stile perfetto" - dipende sempre dal contesto.
