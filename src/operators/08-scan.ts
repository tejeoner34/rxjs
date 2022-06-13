import { from, reduce, scan } from "rxjs";

//Scan es igual que reduce con la diferencia de que va emitiendo todos los valores acumulados hasta
// que se compoleta.

const numbersArray = [1, 2, 3, 4, 5];

const totalAcumulador = (acumulador: number, valorActual: number) =>
  acumulador + valorActual;

//reduce
from(numbersArray)
  .pipe(reduce(totalAcumulador, 1))
  .subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("Complete"),
  });

//scan
from(numbersArray)
  .pipe(scan(totalAcumulador, 1))
  .subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("Complete"),
  });


//otro ejemplo mas complejo
// en este ejemplo simulamos un poco como funciona la arquitectura de Redux
// el array de users simula los cambios que va teniendo el estado del objeto de un usuario
// el observable irá emitiendo estos cambios

interface User {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const users: User[] = [
  {id: 'ther', autenticado: false, token: null},
  {id: 'ther', autenticado: true, token: 'ABC'},
  {id: 'ther', autenticado: true, token: 'ABCQ2'},
];

const state$ = from<User[]>(users).pipe(
  scan( (acc, cur) =>{ return {...acc, ...cur}}, {edad: 30})
);

state$.subscribe(console.log)
