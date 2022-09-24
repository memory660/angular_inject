import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-closure',
  templateUrl: './comp-closure.component.html',
  styleUrls: ['./comp-closure.component.scss']
})
export class CompClosureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  compteur() {
    let count = 0;

    return function() {
        return count++;
    };
  }

  closure() {
    let plusUn = this.compteur();     // closure (fonction interne disponible en dehors d’une fonction parente)
    let plusUnBis = this.compteur();  // closure (fonction interne disponible en dehors d’une fonction parente)

    console.log('plusUn', plusUn());        //0
    console.log('plusUn', plusUn());        //1
    console.log('plusUnBis', plusUnBis());  //0
    console.log('plusUn', plusUn());        //2
    console.log('plusUnBis', plusUnBis());  //1
  }
}
/*
* Lorsqu’une fonction interne est disponible en dehors d’une fonction parente, on parle alors de closure

* Le code ci-dessus présente deux intérêts majeurs :
- tout d’abord, notre variable count est protégée de l’extérieur et ne peut être modifiée qu’à partir de notre fonction anonyme.
- Ensuite, on va pouvoir réutiliser notre fonction compteur() pour créer autant de compteurs qu’on le souhaite et qui vont agir indépendamment les uns des autres.
*/
