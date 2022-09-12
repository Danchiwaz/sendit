import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {

  constructor(private navRef:ElementRef) {
      navRef.nativeElement.style.background = "whitenoise";
      navRef.nativeElement.style.color = "white";
   }

}
