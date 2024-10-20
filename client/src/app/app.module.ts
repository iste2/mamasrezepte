import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import {ToolbarModule} from 'primeng/toolbar';
import {Button, ButtonDirective} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {DataViewModule} from 'primeng/dataview';
import {ImageModule} from 'primeng/image';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {GalleriaModule} from 'primeng/galleria';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ChipsModule} from 'primeng/chips';
import {ChipModule} from 'primeng/chip';
import {EditorModule} from 'primeng/editor';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TagModule} from 'primeng/tag';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent
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
    GalleriaModule,
    InputTextareaModule,
    ButtonDirective,
    FormsModule,
    TableModule,
    ChipsModule,
    ChipModule,
    EditorModule,
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    TagModule,
    ConfirmDialogModule,
    FileUploadModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
