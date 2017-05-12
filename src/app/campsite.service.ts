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

  getCampsiteById(id: string) {
    return this.angularFire.object('campsites/' + id);
  }

  saveCampsite(newCampsite: Campsite) {
    this.campsites.push(newCampsite);
  }

  deleteCampsite(campsite) {
    var campsiteInDatabase = this.getCampsiteById(campsite.$key);
    campsiteInDatabase.remove();
  }
}
