import { Directive, HostBinding, HostListener, ElementRef, Renderer, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() defaultColor = 'white';
  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') highlightColor = 'yellow';


@HostBinding('style.backgroundColor') backgroundColor;


@HostListener('mouseenter') onMouseOver() {
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') onMouseLeave() {
  this.backgroundColor = this.defaultColor;
}




  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
