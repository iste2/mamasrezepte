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
      { title: "Apfelstrudel", description: "Ein leckerer Apfelstrudel" },
      { title: "Käsekuchen", description: "Ein leckerer Käsekuchen" },
      { title: "Schokoladenkuchen", description: "Ein leckerer Schokoladenkuchen" },
    ];
  }

}
