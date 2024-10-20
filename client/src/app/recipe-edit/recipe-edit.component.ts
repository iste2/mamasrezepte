import { Component } from '@angular/core';
import {Recipe} from '../models/models';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss'
})
export class RecipeEditComponent {

  recipe: Recipe;
  id = "";

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.recipe = {
      title: "",
      description: "",
    }
  }

  submitForm() {

  }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    if (this.id) {
      this.recipe = await this.recipeService.getRecipe(this.id);
    }
  }

}
