import { Component, inject } from '@angular/core';
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

export class ArticleComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article?: Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));

      this.article = this.articles.find((article) => article.id === this.articleId);
    });
  }

  articles: Article[] = [
    { 
      id: 1,
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
  { 
      id: 2,
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: false, 
      comment: '', 
      likes: 75 
    },
    { 
      id:3,
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 200 
  },
];
  
  publishedComment= false;
  
  showComment():any {
    this.articles.forEach((article) => {
      if (article.comment) {
        this.publishedComment = true;
      }
    })

  }

  togglePublication(i: number): void {
    this.articles[i].isPublished = !this.articles[i].isPublished;
  }

  /*updateFontSize(): void {
    this.articles.forEach((article) => {
      if (article.likes > 150) {

      }
    })
  }*/
}
