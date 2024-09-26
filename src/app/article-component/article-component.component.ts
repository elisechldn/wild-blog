import { Component } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Article {
  article: string,
  title: string,
  author: string,
  content: string,
  image?:string,
  isPublished: boolean,
  comment?: string
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
  article = {
  title: 'Titre de l\'article',
  author: 'John Doe', 
  content: 'Voici le contenu de l\'article.',
  image: 'https://via.placeholder.com/350x150',
  isPublished: true,
  comment: ''
  };
  
  publishedComment= false;
  
  showComment():any {
    if (this.article.comment) {
      this.publishedComment = true;
    }
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
