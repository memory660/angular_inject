import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompInjectSimpleComponent } from './comp-inject-simple/comp-inject-simple.component';
import { CompInjectReducComplexityComponent } from './comp-inject-reduc-complexity/comp-inject-reduc-complexity.component';
import { HttpClientModule } from '@angular/common/http';
import { CompClosureComponent } from './comp-closure/comp-closure.component';
import { CompInjectReducComplexityClosureComponent } from './comp-inject-reduc-complexity-closure/comp-inject-reduc-complexity-closure.component';
import { CompInjectSuperExtendsClosureComponent } from './comp-inject-super-extends-closure/comp-inject-super-extends-closure.component';

@NgModule({
  declarations: [
    AppComponent,
    CompInjectSimpleComponent,
    CompInjectReducComplexityComponent,
    CompClosureComponent,
    CompInjectReducComplexityClosureComponent,
    CompInjectSuperExtendsClosureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
