import { Component,trigger,state,style,transition,animate,keyframes } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<button [@myTrigger]='state' (click)='toggleState()'>test</button>`,
  styles:[],
  animations:[
    trigger('myTrigger',[
      state('small',style({
        transform:'scale(1)'
      })),
      state('large',style({
        transform:'scale(1.4)'
      })),
      transition('small=>large',animate('500ms')),
      transition('large=>small',animate('500ms'))
    ])
  ]
})
export class AppComponent  {
  state: string='small';
  toggleState(){
    this.state =(this.state==='small'?'large':'small');
  }
}
