import { distinct, from } from "rxjs";

// distict: Nos permite hacer que el observable solo emita los valores únicos.
// es decir, si se repite un valor en un array, no emitirá ese valor.

interface Character {
  name: string;
}

const characters: Character[] = [
  {
    name: "Spiderman",
  },
  {
    name: "Superman",
  },
  {
    name: "Spiderman",
  },
  {
    name: "Hulk",
  },
  {
    name: "Dr Strange",
  },
  {
    name: "Hulk",
  },
  {
    name: "Harry Potter",
  },
  {
    name: "Spiderman",
  },
];

const obs$ = from(characters).pipe(distinct((character) => character.name));

// en este caso, Spiderman o Hulk que se repiten en el array, solo aparecerán una vez
obs$.subscribe(console.log);
