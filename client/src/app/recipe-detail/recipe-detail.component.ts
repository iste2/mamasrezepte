import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id = "";

  constructor(private route: ActivatedRoute) {
    this.recipe = { title: "Apfelstrudel", description: "Ein leckerer Apfelstrudel" };
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
  }
}
