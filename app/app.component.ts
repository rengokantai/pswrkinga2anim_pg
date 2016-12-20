import { Component,trigger,state,style,transition,animate,keyframes } from '@angular/core';

@Component({
  selector: 'my-app',
  //template:`<button [@myTrigger]='state' (click)='toggleState()'>test</button>`,
  template:`<button (click)='toggleState()'>test</button>
  <ul>
  <li *ngFor="let item of items" [@myTrigger]='state' (@myTrigger.start)="animStart($event)" (@myTrigger.done)="animDone($event)">{{item}}</li>
  </ul>
  {{animDetails}}
  `,
  styles:[`
    ul{
      list-style-type:none;
      margin:30px 30px 0 0; padding 0;
    }
    li{
      padding:15px;
      width:100%;
      background-color:#f1f1f1;
      margin-bottom:2px;
      font-weight:bold;
    }


  `],
  animations:[
    trigger('myTrigger',[
      state('small',style({
        transform:'scale(1)'
      })),
      state('large',style({
        transform:'scale(1.4)'
      })),
      state('fadeIn',style({
        opacity:'1',
        transform:'scale(1.2)'
      })),
      //transition('small<=>large',animate('500ms'))
      transition('void=>*',[
        //style({opacity:'0',transform:'translateY(20px)'}),
        //animate('500ms 3s')
        animate(500,keyframes([
          style({opacity:0,transform:'translateY(-30px)',offset:0}),
          style({opacity:1,transform:'translateY(5px) scale(1.2)',offset:0.3}),
          style({opacity:0.3,transform:'translateY(0px) scale(1.2)',offset:1}),
        ]))
      ])
])
  ]
})
export class AppComponent  {
  state: string='small';
  //items=['a','b'];
  items=new Array();
  animDetails:string='waiting'
  toggleState(){
    //this.state =(this.state==='small'?'large':'small');
    this.items.push('another');
    this.state="fadeIn";
  }

  animStart(event:any){
    console.log(event)
  }
    animDone(event:any){
    this.animDetails = event.totalTime

  }
}
