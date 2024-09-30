import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleComponent } from './article-component/article-component.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    { path:'**', component: NotFoundComponent },
    { path: '', component: HomePageComponent },
    { path: '/article/:id', component: ArticleComponent },
];
