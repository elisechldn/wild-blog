import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { ArticleComponentComponent } from '../article-component/article-component.component';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NgClass, ArticleComponentComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  //Pas besoin de mettre un type Article [], car on décompose déjà l'objet ici.
  @Input() articlesParent!: Article;

  /*ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));

      this.article = this.articlesParent.find((article) => article.id === this.articleId);
    });
  }*/

    togglePublication(): void {
      this.articlesParent.isPublished = !this.articlesParent.isPublished;
    }
  
}
