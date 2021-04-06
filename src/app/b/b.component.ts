import { Component, OnInit } from '@angular/core';
import { Configure } from '../app.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  public color: string;
  public description: string;
  public cmpName: string = 'b';
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.allActiveEvents[this.cmpName] = [];
  }
  public setColor($evt: Configure) {
    this.color = $evt.color;
    this.description = $evt.description;
  }
}
