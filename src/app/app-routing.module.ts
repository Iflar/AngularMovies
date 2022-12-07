import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import  { LinkPanelComponent } from './link-panel/link-panel.component'

const routes: Routes = [
  { path: 'movies', component: MoviesComponent},
  { path: 'detail/:id', component: MovieDetailComponent},
  { path: 'link-panel', component: LinkPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
