import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompInjectReducComplexityClosureComponent } from './comp-inject-reduc-complexity-closure/comp-inject-reduc-complexity-closure.component';
import { CompInjectReducComplexityComponent } from './comp-inject-reduc-complexity/comp-inject-reduc-complexity.component';

const routes: Routes = [
  { path: 'inject-reduc-complexity/:id', component: CompInjectReducComplexityComponent },
  { path: 'inject-reduc-complexity-closure/:id', component: CompInjectReducComplexityClosureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
