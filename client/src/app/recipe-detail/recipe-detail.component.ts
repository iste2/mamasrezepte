import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/models';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id = "";

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {

  }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.recipe = await this.recipeService.getRecipe(this.id);
  }

  async editRecipe() {
    await this.router.navigateByUrl(`/edit-recipe/${this.id}`);
  }
}
