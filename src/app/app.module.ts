import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';
import { SideBarComponent } from './features/documentation/components/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DocumentationPageComponent } from './features/documentation/documentation-page/documentation-page.component';
import { DisplayerComponent } from './features/documentation/components/displayer/displayer.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    DocumentationPageComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
