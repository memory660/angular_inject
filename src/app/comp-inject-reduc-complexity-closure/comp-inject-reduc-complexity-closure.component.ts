import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, interval, Subscription, map, tap, mergeMap, filter } from 'rxjs';

// ---------------------------------------------------------------------------------
export const fetchEntityFn = (): (() => Observable<any>) => {
  const http = inject(HttpClient);
  const route = inject(ActivatedRoute);
  const id = route.snapshot.params['id'];
  console.log('%c@@@id===>', 'color:green;font-size:15px', id)

  return () => http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
}
// ---------------------------------------------------------------------------------

@Component({
  selector: 'app-comp-inject-reduc-complexity-closure',
  templateUrl: './comp-inject-reduc-complexity-closure.component.html',
  styleUrls: ['./comp-inject-reduc-complexity-closure.component.scss']
})
export class CompInjectReducComplexityClosureComponent implements OnInit {
  protected entity$?: Observable<any>;
  private _fetchEntityFn = fetchEntityFn();

  constructor() {
    //this.entity$ = this._fetchEntityFn();
  }

  ngOnInit(): void {
  }

  refreshEntity() {
    this.entity$ = this._fetchEntityFn();
  }
}
