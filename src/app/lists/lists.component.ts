import { Component, OnInit } from '@angular/core';
import { Campsite } from '../campsite.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CampsiteService } from '../campsite.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [CampsiteService, AngularFireDatabase]
})
export class ListsComponent implements OnInit {
  campsites: FirebaseListObservable<any[]>;
  constructor(private campsiteService: CampsiteService) { }

  ngOnInit() {
    this.campsites = this.campsiteService.getCampsites();
  }

}
