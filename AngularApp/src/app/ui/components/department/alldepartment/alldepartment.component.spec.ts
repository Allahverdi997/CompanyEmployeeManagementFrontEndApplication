import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldepartmentComponent } from './alldepartment.component';

describe('AlldepartmentComponent', () => {
  let component: AlldepartmentComponent;
  let fixture: ComponentFixture<AlldepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
