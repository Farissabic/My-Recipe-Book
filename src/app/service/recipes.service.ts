import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private afs : AngularFirestore, private router : Router,private authService : AuthService) { }


  saveRecipe(data : any){
    this.afs.collection('Recipes').add(data);
  }


  loadMyRecipes(){
    let ID = localStorage.getItem('userID');
    return this.afs.collection('Recipes', ref=>{return ref.where('userID','==',ID)}).snapshotChanges().pipe(
      map(response=>{
        return response.map(res=>{
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id,data};
        })
      })
    )
    
  }

  loadRecipes(){
    let ID = localStorage.getItem('userID');
    return this.afs.collection('Recipes', ref=>{return ref.where('userID','!=',ID).limit(12)}).snapshotChanges().pipe(
      map(response=>{
        return response.map(res=>{
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id,data};
        })
      })
    )
    
  }


  loadOneRecipe(id: string){
    return this.afs.collection('Recipes').doc(id).valueChanges();
  }


  UpdateRecipe(data:any,id:string){
    this.afs.collection('Recipes').doc(id).update(data);
    this.router.navigate(['/my-recipes']);
  }

  DeleteRecipe(id:string){
    this.afs.collection('Recipes').doc(id).delete();
    this.router.navigate(['/my-recipes']);
  }
}
