import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DataService]
})
export class MainComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  search(city: string) {
    this.dataService.fetchData(city).subscribe(
      (data) => {
        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);
        console.log(data[3]);
        console.log(data[4]);
      }
    );
  }

}
