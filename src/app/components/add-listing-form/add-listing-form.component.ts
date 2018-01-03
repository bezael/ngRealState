import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CribsService } from '../../services/cribs.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
  
  @ViewChild('newCribForm') newCribForm: NgForm;
  public firebase;
  public myCrib;

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];	
  constructor(public cribsService:CribsService, private angularFire: AngularFireDatabase) { 
    this.myCrib=null;
    this.firebase = this.angularFire.list('/cribs');
  }

  ngOnInit() {
  }

  // onCribSubmit(data): void{
  // 	this.cribsService.addCrib(data);
  //   this.newCribForm.reset();
  // }

  onCribSubmit(data): void{
    console.log(data);
    this.firebase.push({
      address: data.address,
      area: data.area,
      bathrooms: data.bathrooms,
      bedrooms: data.bedrooms,
      description: data.description,
      price: data.price,
      type: data.type,
      image: 'default-crib',
      cretedDate: (new Date()).getTime()
    });
    this.newCribForm.reset();
  }

}
