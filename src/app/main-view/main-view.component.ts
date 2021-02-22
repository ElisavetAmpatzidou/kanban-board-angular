import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from '../models/board.module';
import { Column } from '../models/column.module';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('IDEAS',[
    "1st idea",
    "2nd idea",
    "3rd idea"
    ]),
    new Column('TODO',[
      "6th task",
      "7th task",
      "8th task"
      ]),
      new Column('DOING',[
        "3th task",
        "4th task",
        "5th task"
        ]),
        new Column('DONE',[
          "1st task",
          "2nd task",
          "3rd task"
          ])
  ]);

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
