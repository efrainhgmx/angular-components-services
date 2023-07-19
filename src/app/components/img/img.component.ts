import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
 @Input() text:string  = 'Nothing to see here yet';
 @Output() imgClick = new EventEmitter<string>();


 onClick( img:string ){
   this.imgClick.emit(img);
  } 

}
