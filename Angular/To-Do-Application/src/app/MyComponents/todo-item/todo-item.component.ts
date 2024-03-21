import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { ToDo } from '../../ToDo';
import { log } from 'console';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input()
  todo: ToDo = new ToDo;
  @Input()
  i!: number;
  @Output()
  todoDelete: EventEmitter<ToDo> = new EventEmitter();
  @Output()
  todoCheckBox: EventEmitter<ToDo> = new EventEmitter();
  constructor(){

  }
  ngOnInit(): void{
  }
  onClick(){
    this.todoDelete.emit(this.todo);
    console.log("event has been triggered");
    
  }
  onCheckBoxClick(todo: any){
    this.todoCheckBox.emit(this.todo);

  }
}
