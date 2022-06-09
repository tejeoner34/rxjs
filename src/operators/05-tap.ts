import { map, range, tap } from "rxjs";

// el tap es un operador que se suele usar principalmente para depurar.
// nos permite por ejemplo hacer console.log 

const numeros$ = range(1, 5)
  .pipe(
    tap( x => {
      console.log(x)
    }
    ),
    map( val => val * 10),
    tap( x => console.log(x))
)


numeros$.subscribe( val => console.log(val) );