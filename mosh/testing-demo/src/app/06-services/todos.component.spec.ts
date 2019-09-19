import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, of, throwError } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);

  });

  it('should set the todos property with the items returned from the server', () => {
    
    const arrayValues = [1, 2, 3];
    const arraySource = from([arrayValues]);

    spyOn(service, 'getTodos').and.callFake(() => {
      return arraySource;
    });

    component.ngOnInit();
    expect(component.todos.length).toBe(3);
  });

  it('sould call the server to save the changes when a new todo item was added', () =>{
    let spy = 
    spyOn(service, 'add').and.callFake(() => {
      return new Observable<any>();
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('sould add the new todo return from the server', () =>{
    const todo = {id:1};
    const todoSource = from([todo]);
    spyOn(service, 'add').and.returnValue(todoSource);

    component.add();
    
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('sould set the message property if the server return error when adding a  new todo', () =>{
    let error = 'error from the server';
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();
    
    expect(component.message).toBe(error);
  });

  it('sould call the server to delete a todo item if the user confirms', () =>{
    spyOn(window, 'confirm').and.returnValue(true);
    
    let spy = spyOn(service, 'delete').and.returnValue(new Observable<any>());

    component.delete(1);
    
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('sould NOT call the server to delete a todo item if the user cancels', () =>{
    spyOn(window, 'confirm').and.returnValue(false);
    
    let spy = spyOn(service, 'delete').and.returnValue(new Observable<any>());

    component.delete(1);
    
    expect(spy).not.toHaveBeenCalled();
  });
});