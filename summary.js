// bene, partendo dal voler ripasare le basi per sicurezza per il test alkemy mi sono dilungato, ma ne e valsa la pena, perche ho capito un aspettto su cui devo migliorare che e cruciale poi anche nel mondo lavorativo su progetti eali, perche un conto e sapere la differenza tra truthy e falsy, che ormai e nella memoria muscolare anche senza pensarci, e un conto e sapere scrivere in modo efficiente ed elegante.

// In sostanza quindi ho capito che ci sono praticamente, tralasciando le sfumature, 3 tipi di stili di scrivere codice:

// 1. procedurale, il piu naive
// 2. imperativo, in genere non il massimo per codebase ma dipende da caso a caso e sopratutto ottimo per lettcode di qeusto tipo
// 3. dichiarativo, in teoria il migliore, sia perche non O(n2) sia perche e piu ordinato e implcitiamente piu robusto, ma anche qui si valuta caso per caso

// quello che ho capito su di me e che se sono in ambiente react soprattuto ma in generale se uso una libreria o un framework impsotato, scrivo naturalmente codice dichiarativo, perche sostanzialemnte seguo le regole dell'environemnt, ma se devo scrivere codice nudo, purtroppo per adesso sono ad un lvello molto basso, perche parto sempre rpdocudarale da quando ho iniziato la mia carriera, anche se adesso conosco molto meglo tutte le funzionalita del linguaggio ovviamente.

// per questo non voglio perdere troppo tempo prima di fare il test di alkemy ma voglio intanto instradarmi un po sul passare naturalmente a dichiarativo/imperativo invece che procedurale, cosi intanto almeno fisso un po di concettti, e poi faro il test.

// per capire ora all'inizio fino a che non entro nella forma mentis se sto seguendo la strada giusta hop individuato questi 4 punti che mi aiutano a orientarmi:

// 1. il codice che sto scrivendo e tutto sequenziale fin nei minimi step? se si probabilmente sto scrivernod procedurale
// 2. faccio uso di stati/variabili intermedie? molto probabilmente procedurale
// 3. sto esplicitando troppo i vari passaggi invece di astrarre? procedurale
// 4. sto concatendo tante funzioni soprattutto built in? sospetto proceduale
// 5. extra: sento odore di O(n2)? probabile procedurale

/**  ---------- PROCEDURALE [O(n²)] ---------- */

// function firstUniqueChar(string) {
// 	if (!string || string.length === 0) return null;

// 	let arrString = string.split('');
// 	const duplicatedCharsArr = string
// 		.split('')
// 		.filter((item, pos) => arrString.indexOf(item) !== pos);

// 	const firstUniqueChar = arrString.filter(
// 		(char) => !duplicatedCharsArr.includes(char),
// 	)[0];

// 	const result = firstUniqueChar ?? null;

// 	return result;
// }

/**  ---------- ULTRA DICHIARATIVA [O(n²)] ---------- */

// const firstUniqueChar = (str) =>
// 	typeof str !== 'string' || str.length === 0
// 		? null
// 		: ([...str].find((char) => [...str].filter((c) => c === char).length === 1) ?? null);

/**  ---------- FUNZIONALE PURO [O(n²)] ---------- */

// const firstUniqueChar = (str) => {
// 	if (typeof str !== 'string' || str.length === 0) return null;

// 	return [...str].find((ch) => [...str].filter((c) => c === ch).length === 1) ?? null;
// };

/**  ---------- IMPERATIVA [O(n)] ---------- */

// function firstUniqueChar(str) {
// 	if (typeof str !== 'string' || str.length === 0) return null;

// 	const count = {};

// 	for (const char of str) {
// 		count[char] = (count[char] || 0) + 1;
// 	}

// 	for (const char of str) {
// 		if (count[char] === 1) return char;
// 	}

// 	return null;
// }

/**  ---------- DICHIARATIVA [O(n)] ---------- */

// const firstUniqueChar = (str) => {
//   if (typeof str !== "string" || str.length === 0) return null;

//   const freq = [...str].reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   return [...str].find(char => freq[char] === 1) ?? null;
// };

// In definitiva:

// Tienili così in testa 👇

// 1️⃣ Sto descrivendo il risultato o i passaggi?
// 	•	risultato → dichiarativo
// 	•	passaggi → procedurale

// 2️⃣ Ho stato intermedio che potrei eliminare?
// 	•	sì → sospetto procedurale
// 	•	no → bene

// 3️⃣ Sto attraversando i dati più volte senza motivo?
// 	•	sì → rischio O(n²)
// 	•	no → ok

// 4️⃣ Ogni passaggio ha un nome/ruolo chiaro?
// 	•	sì → dichiarativo sano
// 	•	no → spaghetti

// 5️⃣ Se cambio scala, questo codice soffre?
// 	•	sì → problema di approccio
// 	•	no → sei sulla strada giusta

// ⸻

// 🎯 Verità chiave (questa portatela dietro)

// Il codice “buono” non è quello più elegante,
// ma quello che dice chiaramente cosa sta facendo
// con il minor numero di attraversamenti dei dati.
