import { Directive,ElementRef, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appLoginvalidation]'
})
export class LoginvalidationDirective implements Validator{

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

  }
}
