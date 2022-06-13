import { from } from "rxjs";

// Observable al que le pasamos un array y nos devuelve los valores por separado.
const numbersArray = [1, 2, 3, 4, 5];

from(numbersArray)
.subscribe(console.log)