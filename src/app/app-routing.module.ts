import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './core/components/error404/error404.component';
import { HomeComponent } from './features/home/home.component';
import { DocumentationPageComponent } from './features/documentation/documentation-page/documentation-page.component';
import { AboutPageComponent } from './features/about/about-page/about-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home Page'},
  {path: 'documentation', component: DocumentationPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', component: Error404Component, title: 'Error Page Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
