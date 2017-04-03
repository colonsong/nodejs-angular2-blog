import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTinyComponentComponent } from './simple-tiny-component.component';

describe('SimpleTinyComponentComponent', () => {
  let component: SimpleTinyComponentComponent;
  let fixture: ComponentFixture<SimpleTinyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTinyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTinyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
