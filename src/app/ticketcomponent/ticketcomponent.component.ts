import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import{Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-ticketcomponent',
  templateUrl: './ticketcomponent.component.html',
  styleUrls: ['./ticketcomponent.component.css']
})
export class TicketcomponentComponent implements OnInit {


  data:any;
  constructor(private router:Router,private route:ActivatedRoute){
    
  

  }

  ngOnInit(): void {

  this.route.queryParams.subscribe((params)=>{

  console.log(params)
  this.data = JSON.parse(atob(params['data']))

  }) 

  }
}
 