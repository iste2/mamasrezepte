import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: "", component: RecipeListComponent, pathMatch: "full" },
  { path: "recipes/:id", component: RecipeDetailComponent, pathMatch: "full" },
  { path: "new-recipe", component: RecipeEditComponent, pathMatch: "full" },
  { path: "edit-recipe/:id", component: RecipeEditComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
