import { Component, OnInit, Input } from '@angular/core';
import { CribType } from '../../interfaces/crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {
	@Input('crib')crib: CribType;	
  constructor() { }

  ngOnInit() {
  	let bedrooms = this.crib.bedrooms;
  }

}
