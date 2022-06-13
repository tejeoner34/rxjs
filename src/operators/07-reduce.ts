import { fromEvent, interval, map, reduce, take } from "rxjs";

// reduce es una funcion que se aplica sobre los arrays que nos devuelve un valor acumulado y devuelve un único valor

//ejemplo plain js
const numbersArray = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual
};

const total = numbersArray.reduce(totalReducer, 0);

//ejemplo rxjs

interval(1000).pipe(
  take(3),
  reduce(totalReducer, 5)
)
.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete')
})

