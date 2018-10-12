import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (private httpService: HttpClient) { }
  data: any;

  ngOnInit () {

    this.httpService.get('./assets/json/data.json').subscribe(
      (data: any) => {
        this.data = data.dataItems;
        console.log(this.data);
      },
      (err: any) => {
        console.log (err.message);
      }
    );
  }

}
