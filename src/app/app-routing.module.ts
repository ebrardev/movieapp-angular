import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {path:'movies', component: MoviesComponent},
];


@NgModule({
  exports: [RouterModule],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
})
export class AppRoutingModule { }
 