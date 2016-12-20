import { Component,trigger,state,style,transition,animate,keyframes } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<button [@myTrigger]='state'>test</button>`,
  styles:[],
  animations:[
    trigger('myTrigger',[

    ])
  ]
})
export class AppComponent  {
  state: string='ke';
}
