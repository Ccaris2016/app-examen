import { Component } from '@angular/core';
import { shadow } from '@ionic/core/dist/types/utils/transition/ios.transition';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  search:string;
  list = [
      {nombre : "Mantequilla", precio: 1500},
      {nombre : "Zapallo", precio: 1000},
      {nombre : "Chip", precio: 500},
      {nombre : "Billetera", precio: 15000},
      {nombre : "Audifono", precio: 30000}
  ]
  show = [

  ]
  constructor() {
  }

  searchproduct($event){
    this.search = $event.target.value;
    for(var x = 0 ; x< this.list.length; x++){
      console.log(this.list[x].nombre)
      if (this.search.toLowerCase === this.list[x].nombre.toLowerCase){
        this.show.push(this.list[x])
      }
    }
  }
}
