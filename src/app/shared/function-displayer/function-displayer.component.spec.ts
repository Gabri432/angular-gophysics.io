import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionDisplayerComponent } from './function-displayer.component';

describe('FunctionDisplayerComponent', () => {
  let component: FunctionDisplayerComponent;
  let fixture: ComponentFixture<FunctionDisplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionDisplayerComponent]
    });
    fixture = TestBed.createComponent(FunctionDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
