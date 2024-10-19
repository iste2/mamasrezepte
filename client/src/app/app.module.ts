import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import {ToolbarModule} from 'primeng/toolbar';
import {Button} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {DataViewModule} from 'primeng/dataview';
import {ImageModule} from 'primeng/image';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    Button,
    InputTextModule,
    MenubarModule,
    DataViewModule,
    ImageModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
