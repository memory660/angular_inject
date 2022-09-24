import { Component, OnInit, inject } from '@angular/core';
import { UseHttpTodo } from './http-class';
import { OtherService } from './other.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp-inject-super-extends-closure',
  templateUrl: './comp-inject-super-extends-closure.component.html',
  styleUrls: ['./comp-inject-super-extends-closure.component.scss']
})
export class CompInjectSuperExtendsClosureComponent extends UseHttpTodo implements OnInit {
  private _otherService = inject(OtherService);    // exemple d'accès à un service
  todo?: Observable<any>;

  ngOnInit(): void {

  }

  refreshEntity() {
    this.todo = this.httpTodo();
  }
}

/*
- suppression du constructeur dans son ensemble
- plus besoin de super et declarer les services dans le composant et l'objet à heriter, ni meme de super()
*/
