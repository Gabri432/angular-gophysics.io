import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './components/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { throwIfAlreadyLoaded } from './module-import.guard';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [Error404Component, FooterComponent, HeaderComponent],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [Error404Component, FooterComponent, HeaderComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
