import { Add, Subtract, Multiply } from './exporteg.js';
console.log("Add:",Add(1,2));
console.log("Subtract:",Subtract(1,2));
console.log("Multiply:",Multiply(1,2));

// Importing a default export.
import DefFunc from './exporteg.js';
// Here in exporteg.js the default export is add, so DefFunc will be equivalent to Add
console.log("Default (Add):", DefFunc(1,2));

