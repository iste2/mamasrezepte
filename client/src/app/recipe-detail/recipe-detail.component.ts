import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/models';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../services/recipe.service';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id = "";
  imagePaths: Record<string, string> = {};

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private imageService: ImageService) {

  }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.recipe = await this.recipeService.getRecipe(this.id);
    this.fillImagePaths();
  }

  async editRecipe() {
    await this.router.navigateByUrl(`/edit-recipe/${this.id}`);
  }

  fillImagePaths() {
    for (const image of this.recipe.images) {
      this.imagePaths[image] = this.imageService.getImagePath(image);
    }
  }
}
