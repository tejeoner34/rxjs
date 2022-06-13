import { catchError, from, map, of, reduce, scan } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

// LLamadas Ajax y cazando errores
// al igual que en el otro ejemplo, tenemos la opcion de crear una funcion y luego
// pasamos esta funcion al catchError de Ajax o, tambien podemos gestionar el error
// directamente desde el suscriber.

const url = "https://api.github.com/userlls?per_pages=5";

const catchErrorFunction = (res: AjaxError) => {
  console.warn(res.message);
  return of({
    ok: false,
    users: [],
  });
};

const obs1$ = ajax.getJSON( url ).pipe(
  catchError( catchErrorFunction )
)

obs1$.subscribe({
  next: res => console.log(res),
  error: err => console.warn(err),
  complete: () => console.log('complete')
})