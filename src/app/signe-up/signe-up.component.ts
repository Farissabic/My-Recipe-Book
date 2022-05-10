import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signe-up',
  templateUrl: './signe-up.component.html',
  styleUrls: ['./signe-up.component.css']
})
export class SigneUpComponent implements OnInit {

  signeUpForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  });

  constructor(private authService :AuthService ) { }

  ngOnInit(): void {
    
  }

  get fc(){
    return this.signeUpForm.controls;
  }


  submit(){
    const {name,email,password} = this.signeUpForm.value;
    this.authService.signeUp(name,email,password);
  }

}
