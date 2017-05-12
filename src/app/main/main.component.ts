import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Campsite } from './../campsite.model';
import { CampsiteService } from './../campsite.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DataService, CampsiteService, AngularFireDatabase]
})
export class MainComponent implements OnInit {
  results = [];
  constructor(private dataService: DataService, private campsiteService: CampsiteService) {
  }

  ngOnInit() {
  }

  search(city: string) {
    this.dataService.fetchData(city).subscribe(
      (data) => {
          for (let i = 0; i < data[4].results.length; i++) {
            this.results.push(data[4].results[i]);
          }
          console.log(this.results);
          return this.results;
        }
        // console.log(data[0]);
        // console.log(data[1]);
        // console.log(data[2]);
        // console.log(data[3]);
        // console.log(data[4]);
    );
  }

  save(address: string, city: string, zipcode: string, state: string) {
    var newCampsite: Campsite = new Campsite(address, city, zipcode, state);
    this.campsiteService.saveCampsite(newCampsite);
  }
}
