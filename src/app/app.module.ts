import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SideBarComponent } from './features/documentation/components/side-bar/side-bar.component';
import { Error404Component } from './core/components/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { DocumentationPageComponent } from './features/documentation/documentation-page/documentation-page.component';
import { DisplayerComponent } from './features/documentation/components/displayer/displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    Error404Component,
    DocumentationPageComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
