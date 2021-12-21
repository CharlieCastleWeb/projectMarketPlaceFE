import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})

export class RegisterComponent {

  organizationTypes: string[] = [ 'Empresa Privada', 
                                  'Empresa Pública', 
                                  'ONG o asociación', 
                                  'Otros' ];

  miFormulario: FormGroup = this.fb.group({
    name: ['Test', [ Validators.required ]],
    email: ['test@test.com', [ Validators.required ]],
    password: ['123456', [ Validators.required, Validators.minLength(6)]],
    organizationType: ['', [ Validators.required] ]
  });

  constructor(  private fb: FormBuilder,
                private router: Router ) { }

  register() {
    console.log(this.miFormulario.value);

    this.router.navigateByUrl('/dashboard');
  }
}
