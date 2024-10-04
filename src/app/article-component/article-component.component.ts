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

  @Input() articlesParent!: Article[];

  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article?: Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));

      this.article = this.articlesParent.find((article) => article.id === this.articleId);
    });
  }
  
  publishedComment= false;
  
  showComment():any {
    this.articlesParent.forEach((article) => {
      if (article.comment) {
        this.publishedComment = true;
      }
    })

  }

  /*updateFontSize(): void {
    this.articles.forEach((article) => {
      if (article.likes > 150) {

      }
    })
  }*/
}
