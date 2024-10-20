import {Component, OnInit} from '@angular/core';
import {RecipeDocument} from '../models/models';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TagService} from '../services/tag.service';

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
    private route: ActivatedRoute,
    protected tagService: TagService) {

  }

  async ngOnInit(): Promise<void> {
    this.readQueryParams();
    await this.recipeService.updateRecipes(this.search);
    await this.tagService.updateTags();
  }

  async goToRecipe(recipe: RecipeDocument): Promise<void> {
    await this.router.navigateByUrl(`/recipes/${recipe.$id}`);
  }

  readQueryParams(): void {
    this.route.queryParams.subscribe(async params => {
      this.search = params['search'];
      await this.recipeService.updateRecipes(this.search);
    });
  }

}
