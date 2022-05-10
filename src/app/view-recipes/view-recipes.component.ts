import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent implements OnInit {

  recipe: any={};

  constructor(private authService : AuthService, private rout : ActivatedRoute,private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.rout.params.subscribe(res=>{
      this.recipesService.loadOneRecipe(res['id']).subscribe(response=>{
        this.recipe = response;
        console.log(this.recipe);
      })
    })
  }

  logOut(){
    this.authService.logout();
  }

}
