/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy();
  // });

  it('should load todos from the server - async', async(() => {
    let service = TestBed.get(TodoService);
    const arrayValues = [1, 2, 3];
    const arraySource = from([arrayValues]);

    // spyOn(service, 'getTodos').and.callFake(() => {
    //   return arraySource;
    // });
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve(arrayValues));
    //    spyOn(service, 'getTodos').and.returnValue(Promise.resolve(arraySource));
    // fixture.debugElement.injector.get(TodoService);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    });

  }));

  it('should load todos from the server - fake', fakeAsync(() => {
    let service = TestBed.get(TodoService);
    const arrayValues = [1, 2, 3];
    const arraySource = from([arrayValues]);

    // spyOn(service, 'getTodos').and.callFake(() => {
    //   return arraySource;
    // });
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve(arrayValues));
    //    spyOn(service, 'getTodos').and.returnValue(Promise.resolve(arraySource));
    // fixture.debugElement.injector.get(TodoService);

    fixture.detectChanges();
    tick();
    expect(component.todos.length).toBe(3);
  }));


}); 
