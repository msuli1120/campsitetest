import { Injectable } from '@angular/core';
import { Campsite } from './campsite.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CampsiteService {
  campsites: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFireDatabase) {
    this.campsites = angularFire.list('campsites');
  }

  getCampsites() {
    return this.campsites;
  }

  saveCampsite(newCampsite: Campsite) {
    this.campsites.push(newCampsite);
  }
}
