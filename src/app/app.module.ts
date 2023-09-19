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
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AboutPageComponent } from './features/about/about-page/about-page.component';
import {Location} from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    DocumentationPageComponent,
    DisplayerComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    CoreModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const __stripTrailingSlash = (Location as any).stripTrailingSlash; 
Location.stripTrailingSlash = function (url) {  
  if (!url.endsWith('/')) {  
    url=url + '/';  
  } 
  const queryString$ = url.match(/([^?]*)?(.*)/) as RegExpMatchArray;
  if (queryString$[2].length > 0) {  
    return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);  
  }  
  return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);  
};
