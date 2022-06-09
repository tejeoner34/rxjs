import { Observable, Observer } from 'rxjs';

const obs$ = new Observable<any>( subs => {

  // le pasamos valores nuevos al observable con next.
  subs.next('Hola');
  subs.next('mundo');

  // con el complete hacemos que se deje de emitir información
  subs.complete();
});


// vamos a hacer un suscriptor 
const observer: Observer<any> = {
  next: valor => console.log(valor),
  error: error => console.warn(error),
  complete: () => console.info('Se ejecuta cuando se hace complete al observable')
}

obs$.subscribe(observer)

// obs$.subscribe(
//   valor => console.log(valor),
//   error => console.warn(error),
//   () => console.info('Se ejecuta cuando se hace complete al observable')
// )


