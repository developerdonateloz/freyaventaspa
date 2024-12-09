import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  fb=inject(FormBuilder);
  loginForm!:FormGroup;
  usuario!:string;
  contrasenia!:string;

  @Output()
  eventoEnviarData=new EventEmitter<boolean>();

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      usuario:['',Validators.required],
      contrasenia:['',Validators.required]
    })
  }
  onLogin(){
    this.usuario=this.loginForm.get('usuario')?.value;
    this.contrasenia=this.loginForm.get('contrasenia')?.value;

    if(this.usuario=='donateloz' && this.contrasenia=='123789'){
      this.eventoEnviarData.emit(true);
    }
  }
}
