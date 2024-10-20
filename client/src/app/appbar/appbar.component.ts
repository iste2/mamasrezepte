import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.scss'
})
export class AppbarComponent {

  searchQuery = "";

  constructor(private router: Router) {
  }

  createNewRecipe() {
    this.router.navigateByUrl('/new-recipe');
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }

  search() {
    const searchQuery = this.searchQuery;
    this.searchQuery = "";
    if(searchQuery)
      this.router.navigateByUrl("?search=" + searchQuery);
    else
      this.router.navigateByUrl("/");
  }

}
