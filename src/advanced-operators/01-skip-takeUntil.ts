import { interval, fromEvent, takeUntil, skip } from "rxjs";

// operadores takeUntil y skip

// skip: nos permite en un fromEvent omitir el número de acciones que queramos.
// en este ejemplo tenemos un click a un botón y hemos omitido el primer click

// takeUntil: nos permite completar un observable cuando se produzca un evento

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);

const clickBtn$ = fromEvent(button, 'click').pipe(
  skip(1) // se omite el primer click sobre el boton
);


// estamos completando el observable intervalo cuando se haga click en el botón. (hara falta clicarlo dos veces en este caso)
counter$.pipe(
  takeUntil( clickBtn$ )
)
.subscribe({
  next: val => console.log(val),
  complete: () => console.log('complete')
});