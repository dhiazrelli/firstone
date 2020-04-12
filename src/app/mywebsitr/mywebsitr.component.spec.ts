import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MywebsitrComponent } from './mywebsitr.component';

describe('MywebsitrComponent', () => {
  let component: MywebsitrComponent;
  let fixture: ComponentFixture<MywebsitrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MywebsitrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MywebsitrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
