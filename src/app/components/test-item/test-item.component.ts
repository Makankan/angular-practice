import { Component, OnInit, Input } from '@angular/core';
import {TestArray} from '../../models/TestArray';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.css']
})
export class TestItemComponent implements OnInit {
@Input() te: TestArray;
  constructor() { }

  ngOnInit() {
  }
  // Set Dyanamic Class Binding
  setClasses() {
    let classes= {
      te: true,
      'is-completed': this.te.completed
    }
    return classes;
  }
  onToggle(te) {
    te.completed = !te.completed;
  }

  onDelete(te) {
    console.log('Delete');
  }
}
