import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

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
    name:     ['', [ Validators.required ]],
    email:    ['test@test.com', [ Validators.required, Validators.email ]],
    password: ['123456!', [ Validators.required, 
                            Validators.minLength(6), 
                            Validators.maxLength(10), 
                            Validators.pattern(this.authService.passwordRegex)]],
    organizationType: ['', [ Validators.required] ]
  });

  constructor(  private fb: FormBuilder,
                private router: Router,
                private authService: AuthService ) { }

  register() {
    const { name, email, password, organizationType } = this.miFormulario.value;
    this.authService.register( name, email, password, organizationType )
      .subscribe( ok => {
        if (ok === true ) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });
  }
}
