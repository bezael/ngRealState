import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from '../../services/cribs.service';
import { UtilService } from '../../services/util.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})

export class CribListingComponent implements OnInit {
	public myCribs;
  cribs: Array <any>;
	error: string;
  sortField:string = 'Type';
  sortDirection: string = 'asc';
  sortFields: Array<string> = ['Address', 'Area', 'Bathrooms', 'Bedrooms', 'Price', 'Type'];

  constructor(
    private angularFire:AngularFireDatabase,
    private http:Http, 
    private cribsService:CribsService,
    private utilService: UtilService,
  ) { }

  ngOnInit() {
    this.getAllCribs().subscribe(data => this.cribs=data);
  
    // this.cribsService.getAllCribs()
    //   .subscribe(
    //     data => this.cribs=data,
    //     error => this.error = error.statusText
    //   );
      
      this.cribsService.newCribSubject.subscribe(
        //data => this.cribs.push(data)
        data => this.cribs = [data, ...this.cribs]
      );
  }

  getAllCribs(){
    return this.angularFire.list('/cribs').valueChanges();
  }  

}
