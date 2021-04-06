import { Component, OnInit } from '@angular/core';
import { Configure } from '../app.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  public color: string;
  public description: string;
  public cmpName: string = 'a';
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.allActiveEvents[this.cmpName] = [];
  }
  public setColor($evt: Configure) {
    this.color = $evt.color;
    this.description = $evt.description;
  }
}
