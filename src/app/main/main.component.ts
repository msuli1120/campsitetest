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
  campsites: FirebaseListObservable<any[]>;
  results = [];
  likedCampsites = [];
  constructor(private dataService: DataService, private campsiteService: CampsiteService) {
  }

  ngOnInit() {
    this.campsites = this.campsiteService.getCampsites();
  }

  checkRepeat() {
    this.campsites.subscribe(
      (campsites) => {
        this.likedCampsites = campsites;
        for (let j = 0; j < this.likedCampsites.length; j++) {
          for (let z = 0; z < this.results.length; z++) {
            if (this.results[z].place.addressLine1Txt === this.likedCampsites[j].address) {
              this.results.splice(z, 1);
            }
          }
        }
    });
  }

  search(city: string) {
    this.dataService.fetchData(city).subscribe(
      (data) => {
          for (let i = 0; i < data[4].results.length; i++) {
            this.results.push(data[4].results[i]);
          };
          this.checkRepeat();
          return this.results;
      }
    );
  }

  save(address: string, city: string, zipcode: string, state: string) {
    var newCampsite: Campsite = new Campsite(address, city, zipcode, state);
    this.campsiteService.saveCampsite(newCampsite);
    this.checkRepeat();
    return this.results;
  }
}
