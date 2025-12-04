# JS Drill 2: Cars

This project simulates a **used car dealer inventory** with 50 cars.  
It is designed to help practice **JavaScript higher-order functions (map, filter, reduce)** in a real-world scenario.  

> **Restriction:** Only use `map()`, `filter()`, and `reduce()`. 

---

## Project Structure

- `inventory.js` → Contains the car inventory data  
- `problems/` → Contains solution files:  
  - `problem1.js` to `problem6.js`  
- `tests/` → Contains test files for each problem:  
  - `test1.js` to `test6.js`  
- `.gitignore` → Ignores unnecessary files like `node_modules/`, `.vscode/`, system files   

---

## How to Run

- Open terminal in project root  
- Run any test file with Node.js:  
```bash
node tests/test1.js
node tests/test2.js
node tests/test3.js
node tests/test4.js
node tests/test5.js
node tests/test6.js
```

---

## Problems Solved

1. **Find car with ID 33** → Uses `filter()`  
2. **Get last car in inventory** → Uses array index  
3. **Sort car models alphabetically** → Uses `map()` + `sort()`  
4. **Extract all car years** → Uses `map()`  
5. **Count cars older than 2000** → Uses `filter()`  
6. **Filter BMW and Audi cars** → Uses `filter()`  

---

## Notes

- Commit each problem separately for a clean Git history  
- `.gitignore` prevents tracking of unnecessary files  
- All logic is inside `problems/` and outputs are printed through test scripts
