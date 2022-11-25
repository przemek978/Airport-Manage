import { Directive,ElementRef, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {
  @Input() color!:string;
  @Input() sep!:string;
  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    //this.element.nativeElement.innerText = 'Date of birth: ' + outDate;
  console.log(this.element);
  this.element.nativeElement.style.color=this.color;
  this.element.nativeElement.face=;
  }
}
