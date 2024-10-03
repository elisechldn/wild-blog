import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})

export class SignUpFormComponent {
  formBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.group({
    username:['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group({
      password: ['', [Validators.required, this.securePasswordValidator()]],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator()})
})

  securePasswordValidator(): ValidatorFn {
    /*Return d'une autre fonction. Elle prend en paramètre control de type AbstractControl.
    Il retournera un objet de type ValidationErrors (si erreur) ou nul (si valide)*/
    return (control: AbstractControl): ValidationErrors | null => {
      //Le champ de formulaire s'appelle control et on en vérifie la valeur.
    const value = control.value || '';
    const isValidLength = value.length >= 12;
    //.test est fourni par l'objet RegExp pour vérifier si la value correspond à l'expression régulière.
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase= /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength; 
  
    /* Si le password est valide, la fonction return null, car pas d'erreurs.
    Si erreur, la fonction renvoie un objet d'erreur nommé securePassword*/
    return passwordValid ? null : {secturePassword: true};
    };
  }

  passwordMatchValidator(): ValidatorFn {
    return (formGroup:AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch : true};
    }
  }

  onSubmit():void {
    if (this.signUpForm.valid) {
      console.log('Authentification réussie avec succès', this.signUpForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
