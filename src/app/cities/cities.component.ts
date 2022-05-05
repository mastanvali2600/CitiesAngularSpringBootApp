import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CityInterface } from '../interfaces/citi';
 
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  public cities : any;
  public errors:any;
  constructor(private _citiesService:CitiesService) { }

  ngOnInit(): void {
    this._citiesService.getCities().subscribe(data=> this.cities=data ,
    error=> this.errors=error);
  }

}
