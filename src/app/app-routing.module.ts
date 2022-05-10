import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipesComponent } from './edit-recipes/edit-recipes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { AuthGuardGuard } from './service/auth-guard.guard';
import { SigneUpComponent } from './signe-up/signe-up.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';




const routes: Routes = [
  {path:'',component:HomeComponent,canActivate: [AuthGuardGuard]},
  {path:'login', component: LoginComponent },
  {path:'signeUp', component:SigneUpComponent },
  {path: 'my-recipes',component:MyRecipesComponent, children:[
    {path: 'new', component: NewRecipeComponent},
    {path: 'edit/:id', component: EditRecipesComponent},
  ],canActivate: [AuthGuardGuard]
  },
  {path:'view/:id',component: ViewRecipesComponent,canActivate: [AuthGuardGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
