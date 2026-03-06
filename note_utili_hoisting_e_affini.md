
# JavaScript Concepts Review (Hoisting → Scope → References → Strict Mode)

## 1. Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.

### var
- Hoisted
- Initialized with `undefined`
- Function scoped

```js
console.log(a);
var a = 10;
```

Equivalent mental model:

```js
var a;
console.log(a);
a = 10;
```

Output:

```
undefined
```

### let / const
- Hoisted
- **Not initialized**
- Block scoped
- Inside the **Temporal Dead Zone (TDZ)** until initialization

```js
console.log(a);
let a = 5;
```

Result:

```
ReferenceError
```

### Temporal Dead Zone (TDZ)

Time between hoisting and initialization.

```js
{
  console.log(a); // ReferenceError
  let a = 5;
}
```

---

# 2. Scope

## Global Scope
Accessible everywhere.

```js
let x = 10;
```

## Function Scope

```js
function test() {
  let a = 10;
}
```

`a` cannot be accessed outside.

```js
console.log(a); // ReferenceError
```

## Block Scope

Blocks created by `{}`.

```js
if (true) {
  let a = 10;
}
```

`a` not accessible outside.

---

# 3. var vs let

| Keyword | Scope |
|-------|------|
| var | Function scoped |
| let | Block scoped |
| const | Block scoped |

Example:

```js
if (true) {
  var a = 10;
}
console.log(a); // 10
```

```js
if (true) {
  let a = 10;
}
console.log(a); // ReferenceError
```

---

# 4. Closures

Functions remember variables from where they were defined.

```js
let a = 1;

function test() {
  console.log(a);
}
```

Even if called elsewhere, it uses the **lexical scope** where it was created.

---

# 5. setTimeout and Loop Behavior

## Using var

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

Output:

```
3
3
3
```

Reason:
- One shared variable `i`
- Loop finishes before callbacks run

## Using let

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

Output:

```
0
1
2
```

Reason:
- `let` creates a **new binding each iteration**

---

# 6. Objects and Function Parameters

JavaScript is:

```
pass-by-value
```

But objects are **reference values**.

Meaning:

```
value copied = reference
```

Example:

```js
const arr = [1,2,3];

function modify(a){
  a.push(4);
}

modify(arr);

console.log(arr);
```

Output:

```
[1,2,3,4]
```

Because both variables point to the same object.

Memory model:

```
arr ---> [1,2,3]
           ^
           |
           a
```

---

# 7. Reassigning Inside Functions

Example:

```js
const user = {name:"Anna"};

function update(u){
  u.name = "Marco";
  u = {name:"Luca"};
}

update(user);

console.log(user.name);
```

Output:

```
Marco
```

Explanation:

```
property change → modifies shared object
reassignment → only changes local variable
```

Memory model:

Before:

```
user ---> {name:"Anna"}
           ^
           |
           u
```

After mutation:

```
user ---> {name:"Marco"}
```

After reassignment:

```
user ---> {name:"Marco"}

u ----> {name:"Luca"}
```

---

# 8. Example with Map

```js
const user = new Map();

function update(u) {
  u.set("name", "Marco");
  u = { name: "Luca" };
}

update(user);

console.log(u);
```

Result:

```
ReferenceError
```

Reason:
`u` exists only inside the function scope.

---

# 9. Implicit Global Variables

Example without declaration:

```js
function update() {
  a = { name: "Luca" };
}

update();

console.log(a);
```

Works in **non‑strict mode** because JavaScript creates a global variable.

Equivalent to:

```js
globalThis.a = { name: "Luca" }
```

---

# 10. Strict Mode

Activated with:

```js
"use strict";
```

Changes behavior of JavaScript to be safer.

### Example

```js
"use strict";

function test() {
  a = 10;
}

test();
```

Output:

```
ReferenceError: a is not defined
```

Because strict mode **forbids implicit globals**.

---

# 11. Creating Globals Correctly

### Standard way

```js
let a = 10;
```

or

```js
var a = 10;
```

### Explicit global object

```js
globalThis.a = 10;
```

---

# 12. Summary Rules

### Scope

```
var   → function scoped
let   → block scoped
const → block scoped
```

### Objects

```
objects passed by value of reference
```

### Mutations

```
modify property → affects original object
reassign variable → local change only
```

### Strict Mode

```
no implicit globals
throws ReferenceError
```

---

# Mental Model

Think of objects as **addresses in memory**.

```
variable → memory address → object
```

Passing a variable copies the **address**, not the object.

