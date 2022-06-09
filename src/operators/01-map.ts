import { map, range, fromEvent } from 'rxjs';


//imaginemos que queremos que los datos que tenemos en el observable (del 1 al 5 en este caso),
// queremos que todos los que se suscriban reciban los numeros multiplicados por 10 y en string.
const myMappedObservable = range(1, 5).pipe(
  map<number, string>(res => (res*10).toString())
)

// de esta manera, la siguiente suscripcion imprimirá por consola 10, 20, 30... en string.
const suscription = myMappedObservable.subscribe( console.log )

