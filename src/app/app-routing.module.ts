import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './core/components/error404/error404.component';
import { HomeComponent } from './features/home/home.component';
import { DocumentationPageComponent } from './features/documentation/documentation-page/documentation-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home Page'},
  {path: 'documentation', component: DocumentationPageComponent},
  {path: '**', component: Error404Component, title: 'Error Page Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
