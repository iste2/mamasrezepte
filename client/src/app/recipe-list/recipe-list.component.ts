import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/models';
import {RecipeService} from '../services/recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {

  constructor(protected recipeService: RecipeService, protected router: Router) {

  }

  ngOnInit(): void {
    this.recipeService.updateRecipes();
  }

  goToRecipe(recipe: Recipe): void {
    this.router.navigateByUrl(`/recipes/${recipe.$id}`);
  }

}
