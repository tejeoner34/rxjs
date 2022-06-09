import { pluck } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

// este operador nos sirve en caso de tener un objeto y querer solo emitir el valor de una
// de las propiedades


// ejemplo de evento de teclado. Esto devolverá a los suscriptores directamente la propiedad
// baseURI que está dentro de la propiedad target del objeto KeyboardEvent
const keyupPluck$ = fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(
    pluck('target', 'baseURI')
  );

keyupPluck$.subscribe(console.log)

