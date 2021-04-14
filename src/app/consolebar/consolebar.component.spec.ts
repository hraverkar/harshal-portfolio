import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolebarComponent } from './consolebar.component';

describe('ConsolebarComponent', () => {
  let component: ConsolebarComponent;
  let fixture: ComponentFixture<ConsolebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
