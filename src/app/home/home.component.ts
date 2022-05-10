import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : string | null = "";
  MyRecipes : any = [];
  Recipes : any = [];

  constructor(private authService : AuthService,private router :Router,private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.user = this.authService.userName;
    this.recipeService.loadRecipes().subscribe(res=>{
      this.Recipes = res;
    });
    this.recipeService.loadMyRecipes().subscribe(res=>{
      this.MyRecipes = res;
    })

    
  }

  logOut(){
    this.authService.logout();
  }

}
