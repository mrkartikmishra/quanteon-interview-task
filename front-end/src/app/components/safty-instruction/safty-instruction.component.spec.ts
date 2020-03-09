import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaftyInstructionComponent } from './safty-instruction.component';

describe('SaftyInstructionComponent', () => {
  let component: SaftyInstructionComponent;
  let fixture: ComponentFixture<SaftyInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaftyInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaftyInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
