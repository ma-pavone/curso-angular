import { Directive, ElementRef, Renderer} from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appYellowBg]' /* Acrescentar p ou buttom para especificar */
})
export class YellowBgDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer) {
      // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
      this._renderer.setElementStyle(
        this._elementRef.nativeElement,
        'background-color',
        'yellow'
      );
    }
}
