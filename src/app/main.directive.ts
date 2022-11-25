import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMain]'
})
export class MainDirective {

  @Input() color!:string;
  @Input() sep!:string;
  constructor(private element:ElementRef) { }
  ngAfterViewInit(): void {
    //this.element.nativeElement.innerText = 'Date of birth: ' + outDate;
  console.log(this.element);
  this.element.nativeElement.style.color=this.color;
  this.element.nativeElement.face=;
  }
}
