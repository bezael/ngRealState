import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
	cribs: Array <any>;
	error: string;

  constructor(private http:Http) { }

  ngOnInit() {
  	this.http.get('../../../assets/data/cribs.json')
  	.map( res => res.json())
  	.subscribe(
  		data => this.cribs=data,
  		error => this.error = error.statusText
  	);
  }

}
