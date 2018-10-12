import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss']
})
export class CustomGridComponent implements OnInit {

  @Input() data: any[];
  @Input() years: any[];

  constructor() { }

  ngOnInit() {
  }

}
