import { filter, fromEvent, map, range } from "rxjs";

range(1, 10).pipe(
  filter( val => val % 2 === 1)
).subscribe( console.log )


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
  map( res => res.code ),
  filter( val => val === 'Enter')
).subscribe( console.log );
