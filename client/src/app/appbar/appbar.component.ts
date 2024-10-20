import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.scss'
})
export class AppbarComponent {

  constructor(private router: Router) {
  }

  createNewRecipe() {
    this.router.navigateByUrl('/new-recipe');
  }

}
