import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  ngOnInit(): void {
    this.tasksList = ['Sample task 1', 'Sample task 2', 'Sample task 3', 'Sample task 4',];
  }

  add(task: string){
    this.tasksList.push(task);
   
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter( e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
