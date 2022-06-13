import { catchError, from, map, of, reduce, scan } from "rxjs";
import { ajax, AjaxError } from 'rxjs/ajax'

// LLamadas Ajax y cazando errores

const atrapaError = ((err: AjaxError) => {
  console.warn('error en:', err);
  return of([]);
});

// sin error
ajax('https://api.github.com/users?per_pages=5').pipe(
  map( res => res.response ),
  catchError(atrapaError)
)
.subscribe(console.log)

// con error

ajax('https://api.github.com/usdasdasdsadsaders?per_pages=5').pipe(
  map( res => res.response ),
  catchError(atrapaError)
)
.subscribe(console.log)
