import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/models';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {

  constructor(protected recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.recipeService.updateRecipes();
  }

}
