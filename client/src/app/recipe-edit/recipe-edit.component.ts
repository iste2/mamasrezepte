import { Component } from '@angular/core';
import {Recipe} from '../models/models';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss'
})
export class RecipeEditComponent {

  title = "";
  description = "";

  submitForm() {

  }

}
