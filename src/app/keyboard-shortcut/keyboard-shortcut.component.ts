import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import keypress from "keypress.js";
@Component({
  selector: 'app-keyboard-shortcut',
  templateUrl: './keyboard-shortcut.component.html',
  styleUrls: ['./keyboard-shortcut.component.scss']
})
export class KeyboardShortcutComponent implements OnInit, OnChanges, OnDestroy {
  @Input() combo: string;
  @Output() callback = new EventEmitter();
  @Input() description: string;
  private  listener: any;
  constructor() { }

  ngOnInit(): void {
    this.listener = new keypress.Listener();
    if(this.combo) {
        this.listener.simple_combo(this.combo, () =>{
        console.log(`You pressed ${this.combo}`);
        this.callback.emit({combo: this.combo, description: this.description});
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( this.listener && changes.combo.previousValue !== changes.combo.currentValue) {
      this.listener.unregister_combo(changes.combo.previousValue);
      this.listener.simple_combo(changes.combo.currentValue, () =>{
        console.log(`You pressed ${this.combo}`);
        this.callback.emit({combo: this.combo, description: this.description});
      });
    }
  }

  ngOnDestroy() {
    this.listener.unregister_combo(this.combo);
  }

}
