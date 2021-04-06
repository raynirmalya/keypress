import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Configure } from '../app.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-configure-keypress',
  templateUrl: './configure-keypress.component.html',
  styleUrls: ['./configure-keypress.component.scss']
})
export class ConfigureKeypressComponent implements OnInit {
  @Input() cmpName: string;
  @Output() getColor = new EventEmitter<Configure>();
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
  }
  public add() {
    this.sharedService.allActiveEvents[this.cmpName].push({});
  }
  public remove(i: number) {
    this.sharedService.allActiveEvents[this.cmpName].splice(i, 1);
  }

  public callback($evt, i: number) {
    if( $evt ) {
      const color = this.sharedService.allActiveEvents[this.cmpName][i] && this.sharedService.allActiveEvents[this.cmpName][i].color ? this.sharedService.allActiveEvents[this.cmpName][i].color : 'black';
      this.sharedService.allActiveEvents[this.cmpName][i].description = `Turns the components background to ${color}`;
      this.getColor.emit({ color ,
       index: i, description: this.sharedService.allActiveEvents[this.cmpName][i].description});
    }
  }
}
