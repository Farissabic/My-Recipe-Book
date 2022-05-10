import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../home/models/recipe';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {


  newRecipeForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    picture: new FormControl('',[Validators.required]),
    desc: new FormControl('',[Validators.required]),
  });

  constructor(private recipeService : RecipesService) { }

  ngOnInit(): void {
  }

  get fc(){
    return this.newRecipeForm.controls;
  }

  addRecipe(){

    const RecipeData : Recipe = {
      title : this.newRecipeForm.value.title,
      picture : this.newRecipeForm.value.picture,
      desc : this.newRecipeForm.value.desc,
      userID : localStorage.getItem('userID')
    }
    console.log(RecipeData);
    this.recipeService.saveRecipe(RecipeData);
    this.newRecipeForm.reset();
  }



}
