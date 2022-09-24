import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, interval, Subscription, map, tap, mergeMap, filter } from 'rxjs';

// ---------------------------------------------------------------------------------
export const fetchEntity = () : Observable<any> => {
  const http = inject(HttpClient);

  return inject(ActivatedRoute).params.pipe(
    map((params: Params) => params['id']),
    filter(id => !!id),
    mergeMap((id: string) => http.get(`https://jsonplaceholder.typicode.com/todos/${id}`))
  )
}
// ---------------------------------------------------------------------------------

@Component({
  selector: 'app-comp-inject-reduc-complexity',
  templateUrl: './comp-inject-reduc-complexity.component.html',
  styleUrls: ['./comp-inject-reduc-complexity.component.scss']
})
export class CompInjectReducComplexityComponent implements OnInit, AfterViewInit {
  protected entity$ = fetchEntity();

  constructor() {
    this.entity$.subscribe(console.log)
   }

  ngOnInit(): void {
    this.entity$.subscribe(console.log)
  }

  ngAfterViewInit(): void {
    this.entity$.subscribe(console.log)
  }

  // click bouton
  // ERRORS :
  // Le code ci-dessus déclenche une erreur d'exécution lorsque la méthode refreshEntity est appelée en dehors de la phase du constructeur
  refreshEntity() {
    this.entity$ = fetchEntity();   // ERRORS
  }



}
/*
Dans une application normale, vous auriez probablement eu un service de façade pour extraire une partie de la logique de récupération des données du composant, du moins c'était la meilleure pratique.
Mais si vous utilisez la fonction inject(), vous n'avez même pas besoin d'un service comme dépendance dans votre composant, il vous suffit d'utiliser fetchEntity().
*/
