import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;
  constructor(private el:ElementRef) { }
  
  // @HostListener('focus') onfocus() {
  //   console.log("on Focus");
  // }

  @HostListener('blur') onblur() {
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }


  
}
