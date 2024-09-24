import { Component } from '@angular/core';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
})
export class ArticleComponentComponent {
  title = "Pas d'idée de titre";
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dolor turpis. Integer sit amet lectus fringilla, dapibus massa et, tristique leo. Nunc sit amet fermentum ipsum. Phasellus a ornare nunc, quis ornare mauris. Vivamus suscipit ut odio a congue. Praesent eros dolor, vestibulum quis consectetur quis, dignissim non est. Nunc fermentum libero ligula, vitae auctor justo ullamcorper vitae. Ut pulvinar convallis purus, ut aliquam tortor. Nullam faucibus faucibus accumsan. Mauris non erat eu dui bibendum scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse consequat eu ligula eu accumsan. Cras et fringilla justo, vitae feugiat tellus.';
}
