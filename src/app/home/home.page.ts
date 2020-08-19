import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { list } from '../obj/23954';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../app.component.scss']
})
export class HomePage implements OnInit {

	filecontent: String;

  ngOnInit() {

  	this.filecontent = JSON.stringify(list);
  }

  constructor() 
  {  }



  iniciar(){


    }

};
