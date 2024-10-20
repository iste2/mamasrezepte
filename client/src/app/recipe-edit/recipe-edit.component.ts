import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/models';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss',
  providers: [MessageService]
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  id = "";

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private messageService: MessageService) {
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
    try {
      await this.recipeService.upsertRecipe(this.recipe as Recipe, this.id);
      this.messageService.add({severity:'success', summary:'Rezept gespeichert'});
      await this.router.navigateByUrl(`/edit-recipe/${this.id}`);
    } catch {
      this.messageService.add({severity:'error', summary:'Fehler beim Speichern'});
    }
  }

}
