import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})

export class RegisterComponent {

  organizationTypes: string[] = [ 'Particular',
                                  'Empresa Privada', 
                                  'Entidad Educativa', 
                                  'Entidad Sanitaria', 
                                  'Administración Pública' ];

  miFormulario: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    email: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    organizationType: ['Seleccione un tipo', [ Validators.required] ]
  });

  constructor( private fb: FormBuilder ) { }

  register() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }
}
