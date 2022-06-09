import { fromEvent } from "rxjs";

/*
* fromEvent nos permite acceder a los eventos del DOM a nivel general.
* Por ejemplo si queremos que suceda algo cuando se realiza un click o scroll en cualquier sitio de la página.
*/

const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
  next: val => console.log(val)
}

src1$.subscribe(observer);
src2$.subscribe( event => {
  console.log(event.key);
});