import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthService } from '../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Usuario, UsuarioLogged } from '../../../../interfaces/user.interface';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        AngularSvgIconModule,
        NgClass,
        NgIf,
    ],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  public usuario !: Usuario;
  public userLogged$ !: Observable<UsuarioLogged>;
  errorMessage = "";

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router,
    private _authService: AuthService) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      sUsuario: ['', [Validators.required, Validators.email]],
      sContra: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    this.usuario = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
        
    this._authService.login(this.usuario).subscribe({
      next : (resp:any) => {
        if(resp.ok){
          this._router.navigate(['/mi-tienda']);
        }else{
          Swal.fire("Ha ocurrrido un error", resp.message, "error");
        }
      },
      error : (error) => {
        Swal.fire("Ha ocurrrido un error", error, "error");
      }
    })
       
  }
}
