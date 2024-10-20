import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/models';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss'
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  id = "";

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {
    this.recipe = {
      title: "",
      description: "",
      tags: [],
    }
  }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    if (this.id) {
      this.recipe = await this.recipeService.getRecipe(this.id) as Recipe;
    }
  }

  async saveRecipe() {
    await this.recipeService.upsertRecipe(this.recipe as Recipe, this.id);
    this.router.navigateByUrl(`/edit-recipe/${this.id}`);
  }

}
