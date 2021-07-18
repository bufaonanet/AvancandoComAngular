import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './todo.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Store } from './todo.store';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    TaskService,
    Store
  ],
  declarations: [
    TodoComponent,
    TasksComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TodoListComponent    
  ],  
  exports:[
    TodoComponent,
    TasksComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TodoListComponent  
  ]
})
export class TodoModule { }
