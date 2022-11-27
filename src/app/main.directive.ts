import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMain]'
})
export class MainDirective {

  @Input() color!:string;
  @Input() sep!:string;
  constructor(private element:ElementRef) { }
  ngAfterViewInit(): void {

  console.log(this.element);
    this.element.nativeElement.style.color=this.color;
  }
}
