import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'article/id/:id', component: ArticleComponentComponent },
    { path:'contact', component: ContactFormComponent},
    { path: 'signup', component: SignUpFormComponent},
    { path:'**', component: NotFoundComponent },
];
