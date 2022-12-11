import { Component, OnInit } from '@angular/core';
import {StyleClassModule} from 'primeng/styleclass';
import { BackendService } from 'src/app/service/backend.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(private backend:BackendService, private fb: FormBuilder, private router:Router) {
    this.loginform = this.fb.group({
      usuario: ['',Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  tryLogIn(){
    this.backend.login().subscribe(response => {
      if(response.status == 1){
        this.router.navigateByUrl('/inicio')
      }
    })
  }

}
