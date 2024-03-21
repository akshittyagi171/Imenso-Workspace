import { Component,EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  title!: string;
  desc!: string;

  @Output()
  todoAdd: EventEmitter<ToDo> = new EventEmitter();

  constructor(){

  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
