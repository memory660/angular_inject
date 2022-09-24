import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const httpFn = (): (() => Observable<any>) => {
  const http = inject(HttpClient);

  return () => http.get(`https://jsonplaceholder.typicode.com/todos/2`);
}

export class UseHttpTodo {
  protected httpTodo = httpFn();
}
