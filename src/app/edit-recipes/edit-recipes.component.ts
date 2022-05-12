import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../home/models/recipe';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.css']
})
export class EditRecipesComponent implements OnInit {

  
  recipe : any;
  id: string = '';
  EditRecipeForm: FormGroup  = this.fb.group({});

  constructor(private recipeService : RecipesService, private rout : ActivatedRoute,  private fb : FormBuilder) {

    this.rout.params.subscribe(res=>{
      this.recipeService.loadOneRecipe(res['id']).subscribe(response=>{
        this.recipe = response;
        this.EditRecipeForm = this.fb.group({
          title:  [this.recipe.title,[Validators.required]],
          picture: [this.recipe.picture,[Validators.required]],
          desc:  [this.recipe.desc,[Validators.required]],
        });

      })
    })

  
   }

  ngOnInit(): void {
    this.rout.params.subscribe(res=>{
      this.id = res['id'];
    })
  }

  get fc(){
    return this.EditRecipeForm.controls;
  }

  EditRecipe(){

    const RecipeData : Recipe = {
      title : this.EditRecipeForm.value.title,
      picture : this.EditRecipeForm.value.picture,
      desc : this.EditRecipeForm.value.desc,
      userID : this.recipe.userID
    }
    console.log(RecipeData);
    this.recipeService.UpdateRecipe(RecipeData,this.id);
  }

  delete(){
    this.recipeService.DeleteRecipe(this.id);
  }

}

