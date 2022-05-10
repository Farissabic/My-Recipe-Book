import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  Recipes : any = [];

  constructor(private authService : AuthService, private recipeService : RecipesService) { }

  ngOnInit(): void {
    this.recipeService.loadMyRecipes().subscribe(res=>{
      this.Recipes = res;
      console.log(this.Recipes);
    })
  }

  logOut(){
    this.authService.logout();
  }

  navigateToSection(section :string){
    window.location.hash = '';
    window.location.hash = section;
  }

}
