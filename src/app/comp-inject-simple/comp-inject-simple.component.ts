import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-inject-simple',
  templateUrl: './comp-inject-simple.component.html',
  styleUrls: ['./comp-inject-simple.component.scss']
})
export class CompInjectSimpleComponent implements OnInit {
  @Input() set title(title: string) {
    // ERRORS
    // not in constructor phase  (on ne peux injecter de cette manière durant la phase de construction)
    //
    // inject(ChangeDetectorRef).detectChanges();
    //
    // pour injecter durant la phase de construction il faut utiliser les "closures"
  }

  private _changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    // ERRORS
    // not in constructor phase  (on ne peux injecter de cette manière durant la phase de construction)
    //
    // inject(ChangeDetectorRef).detectChanges();
    //
    // pour injecter durant la phase de construction il faut utiliser les "closures"
  }

  ngOnInit(): void {
    // OK
    this._changeDetectorRef.detectChanges();
  }

}
