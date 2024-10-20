import {Component, OnInit} from '@angular/core';
import {RecipeDocument} from '../models/models';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {

  search = "";
  constructor(
    protected recipeService: RecipeService,
    protected router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.readQueryParams();
    this.recipeService.updateRecipes(this.search);

  }

  goToRecipe(recipe: RecipeDocument): void {
    this.router.navigateByUrl(`/recipes/${recipe.$id}`);
  }

  readQueryParams(): void {
    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
      this.recipeService.updateRecipes(this.search);
    });
  }

}
