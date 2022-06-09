import { Observable, Observer, Subject } from 'rxjs';


// vamos a hacer un suscriptor 
const observer: Observer<any> = {
  next: valor => console.log(valor),
  error: error => console.warn(error),
  complete: () => console.info('Se ejecuta cuando se hace complete al observable')
}

const intervalo$ = new Observable( subs => {

  const intervalID = setInterval( () => subs.next(Math.random() ), 1000);

  return () => {
    clearInterval(intervalID)
    console.log('fin del observable')
  };
})

// el problema de suscribirnos en este caso al observable es que los datos que van a recibir
// estos suscriptores serán diferentes.
// const subs1 = intervalo$.subscribe(console.log);
// const subs2 = intervalo$.subscribe(console.log);

// Para solucionar esto, tenemos un tipo especial de observable que es el Subject;

const subject$ = new Subject();
const suscripción = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  // Una de las ventajas que tienen los subjects es que podemos modificar el estado desde fuera del observable
  subject$.next(10);
  subject$.complete();
  suscripción.unsubscribe();
}, 3000)