import { Component, inject, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import  { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  template: `
    <input type="text" [(ngModel)]= "article.comment">
    <input type="submit">
  `,
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
})

export class ArticleComponentComponent {


  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  
  @Input() articlesParent!: Article;
  
  publishedComment= false;
  
  showComment():any {
      if (this.articlesParent.comment) {
        this.publishedComment = true;
      }
    }

  /*updateFontSize(): void {
    this.articles.forEach((article) => {
      if (article.likes > 150) {

      }
    })
  }*/
}
