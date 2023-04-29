import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageflights',
  templateUrl: './manageflights.component.html',
  styleUrls: ['./manageflights.component.css']
})
export class ManageflightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
visible:boolean=false
visible2:boolean=false
visible3:boolean=false
visible4:boolean=false
visible5:boolean=false
visible6:boolean=false
visible7:boolean=false
visible8:boolean=false

onclick() {
this.visible2=false
this.visible3=false
this.visible4=false
this.visible5=false
this.visible6=false
this.visible7=false
this.visible8=false
this.visible=!this.visible
}
onclick2() {
  this.visible=false
  this.visible3=false
  this.visible4=false
  this.visible5=false
  this.visible6=false
  this.visible7=false
  this.visible8=false
  this.visible2=!this.visible2
  }
onclick3() {
  this.visible=false
  this.visible2=false
  this.visible4=false
  this.visible5=false
  this.visible6=false
  this.visible7=false
  this.visible8=false
  this.visible3=!this.visible3
  }
onclick4() {
  this.visible=false
  this.visible2=false
  this.visible3=false
  this.visible5=false
  this.visible6=false
  this.visible7=false
  this.visible8=false
  this.visible4=!this.visible4
}
onclick5() {
  this.visible=false
  this.visible2=false
  this.visible3=false
  this.visible4=false
  this.visible6=false
  this.visible7=false
  this.visible8=false
  this.visible5=!this.visible5
  }
  onclick6() {
    this.visible=false
    this.visible2=false
    this.visible3=false
    this.visible4=false
    this.visible5=false
    this.visible7=false
    this.visible8=false
    this.visible6=!this.visible6
    }
    onclick7() {
      this.visible=false
      this.visible2=false
      this.visible3=false
      this.visible4=false
      this.visible5=false
      this.visible6=false
      this.visible8=false
      this.visible7=!this.visible7
      }
      onclick8() {
        this.visible=false
        this.visible2=false
        this.visible3=false
        this.visible4=false
        this.visible5=false
        this.visible6=false
        this.visible7=false
        this.visible8=!this.visible8
        }
}

