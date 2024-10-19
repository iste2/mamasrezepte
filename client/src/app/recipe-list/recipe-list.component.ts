import { Component } from '@angular/core';
import {Recipe} from '../models/models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes!: Recipe[];

  constructor() {
    this.recipes = [
      { title: "Apfelstrudel", description: "Ein leckerer Apfelstrudel", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Kaiserschmarrn", description: "Ein leckerer Kaiserschmarrn", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Sachertorte", description: "Eine leckere Sachertorte", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Wiener Schnitzel", description: "Ein leckeres Wiener Schnitzel", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Gulasch", description: "Ein leckeres Gulasch", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Käsespätzle", description: "Leckere Käsespätzle", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Maultaschen", description: "Leckere Maultaschen", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Schwarzwälder Kirschtorte", description: "Leckere Schwarzwälder Kirschtorte", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Rinderrouladen", description: "Leckere Rinderrouladen", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Kartoffelsalat", description: "Leckerer Kartoffelsalat", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Maultaschen", description: "Leckere Maultaschen", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Schwarzwälder Kirschtorte", description: "Leckere Schwarzwälder Kirschtorte", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Rinderrouladen", description: "Leckere Rinderrouladen", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Kartoffelsalat", description: "Leckerer Kartoffelsalat", imagePaths: [ "https://picsum.photos/200/300" ] },
      { title: "Maultaschen", description: "Leckere Maultaschen", imagePaths: [ "https://picsum.photos/200/300" ] },
    ];
  }

}
