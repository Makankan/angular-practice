import { Component, OnInit } from '@angular/core';
import {TestArray} from '../../models/TestArray';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test: TestArray[];
  constructor(private testService: TestService ) { }

  ngOnInit() {
    this.test = this.testService.getTest().subscribe(test => {
      this.test = test;
    });
  }

}
