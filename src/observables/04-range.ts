import { range, asyncScheduler, observeOn } from 'rxjs';

// podemos usar el pipe y el asyncScheduler para hacerlo asincrono
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('inicio');
src$.subscribe( console.log );
console.log('fin');