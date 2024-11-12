import { Component, inject, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import  { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from '../article-page/article-page.component';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ArticlePageComponent],
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
  
  @Input() article!: Article;
  
  publishedComment= false;
  
  showComment():any {
      if (this.article.comment) {
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
