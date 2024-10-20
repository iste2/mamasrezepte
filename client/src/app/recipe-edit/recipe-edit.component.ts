import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/models';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ImageService} from '../services/image.service';


interface FileUploadEvent {
  currentFiles: File[];
}

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  imagesToBeDeleted: string[] = [];
  imagePaths: Record<string, string> = {};
  id = "";

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    protected imageService: ImageService) {
    this.recipe = {
      title: "",
      description: "",
      tags: [],
      images: []
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
      await this.deleteImages();
      await this.recipeService.upsertRecipe(this.recipe as Recipe, this.id);

      this.messageService.add({severity:'success', summary:'Rezept gespeichert'});
      await this.router.navigateByUrl(`/edit-recipe/${this.id}`);
    } catch {
      this.messageService.add({severity:'error', summary:'Fehler beim Speichern'});
    }
  }

  async deleteRecipe(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Wollen Sie das Rezept wirklich löschen?',
      header: 'Löschen bestätigen',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Löschen',
      rejectLabel: 'Abbrechen',
      accept: async () => {
        try {
          await this.recipeService.deleteRecipe(this.id);
          await this.router.navigateByUrl(`/`);
          this.messageService.add({severity:'success', summary:'Rezept gelöscht'});
        } catch {
          this.messageService.add({severity:'error', summary:'Fehler beim Löschen'});
        }
      },
      reject: async () => {
        console.log("reject");
      }

    })
  }

  async uploadImages(event: FileUploadEvent) {
    for (const file of event.currentFiles) {
      const result = await this.imageService.uploadImage(file);
      this.recipe.images.push(result);
    }
  }

  async deleteImages() {
    for (const imageId of this.imagesToBeDeleted) {
      try {
        await this.imageService.deleteImage(imageId);
      } finally {
        this.recipe.images = this.recipe.images.filter(image => image !== imageId);
      }
    }
    this.imagesToBeDeleted = [];
  }

  markImageForDeletion(imageId: string) {
    if(this.imagesToBeDeleted.includes(imageId)) {
      this.imagesToBeDeleted = this.imagesToBeDeleted.filter(image => image !== imageId);
      return;
    }
    this.imagesToBeDeleted.push(imageId);
  }

  getImagePreviewPath(imageId: string): string {
    if(!this.imagePaths[imageId])
      this.imagePaths[imageId] = this.imageService.getImagePreviewPath(imageId);
    return this.imagePaths[imageId];
  }

}
