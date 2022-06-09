import { interval, timer } from 'rxjs';

// funciones de tiempo que nos da rxjs.

const observer = {
  next: val => console.log(val),
  error: null,
  complete: () => console.log('alarma sonando...')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

// el interval empezará en 0 y va dando dantos en este caso cada segundo
const interval$ = interval(1000);

// interval$.subscribe(observer);


// el timer es una cuenta atrás
// además de un numero se le puede pasar como parámetro un date.
// esto puede ser util por ejemplo para crear una alarma. 'Avisame dentro de 5 segundos'
const timer$ = timer(hoyEn5);

timer$.subscribe(observer);
