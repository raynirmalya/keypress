import { Component, OnInit } from '@angular/core';
import { Configure } from '../app.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {
  public color: string;
  public description: string;
  public cmpName: string = 'c';
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.allActiveEvents[this.cmpName] = [];
  }
  public setColor($evt: Configure) {
    this.color = $evt.color;
    this.description = $evt.description;
  }

}
