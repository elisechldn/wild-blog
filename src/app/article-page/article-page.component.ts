import { Component, inject, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  @Input() articlesParent!: Article;

  /*ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));

      this.article = this.articlesParent.find((article) => article.id === this.articleId);
    });
  }*/

    togglePublication(i: number): void {
      this.articlesParent.isPublished = !this.articlesParent.isPublished;
    }
  
}
