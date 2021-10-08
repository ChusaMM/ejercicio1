import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  email ='chusamoret@gmail.com';
  pass='1234';
  

  constructor(public formBuilder: FormBuilder,public navCtrl: NavController ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  login(){

    if(this.formLogin.controls.email.value == this.email && this.formLogin.controls.password.value == this.pass){
      this.navCtrl.navigateForward('home');
    }
  
  }
}


