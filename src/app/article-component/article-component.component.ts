import { Component } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Article {
  title: string,
  author: string,
  content: string,
  image?:string,
  isPublished: boolean,
  comment?: string,
  likes:number,
};

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <input type="text" [(ngModel)]= "article.comment">
    <input type="submit">
  `,
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
})

export class ArticleComponentComponent {
  articles: Article[] = [
    { 
    title: 'Angular 16: Les nouveautés', 
    author: 'Alice', 
    content: 'Les nouveautés d\'Angular 16 incluent...', 
    image: 'https://via.placeholder.com/350x150',
    isPublished: true, 
    comment: '', 
    likes: 120 
    },
  { 
    title: 'Développer une API REST', 
    author: 'Bob', 
    content: 'Développer une API REST nécessite...', 
    image: 'https://via.placeholder.com/350x150',
    isPublished: false, 
    comment: '', 
    likes: 75 
  },
  { 
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
