import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigneUpComponent } from './signe-up/signe-up.component';
import { environment } from 'src/environments/environment.prod';
import { HomeComponent } from './home/home.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigneUpComponent,
    HomeComponent,
    MyRecipesComponent,
    NewRecipeComponent,
    EditRecipesComponent,
    ViewRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
