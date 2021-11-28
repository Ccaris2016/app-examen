import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  newchat:any;
  newelement:any;
  chat = [
    {chat:"Hola bienvenido al centro de ayuda, dinos ¿en que podemos ayudarte?",user:2},
  ]
  constructor() {}

  onEnter($event){
    this.newchat = $event.target.value;
    $event.target.value = "";
    this.chat.push({chat:this.newchat,user:1})
  }
}
