import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PleasureComponent } from './pleasure.component';

describe('PleasureComponent', () => {
  let component: PleasureComponent;
  let fixture: ComponentFixture<PleasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PleasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PleasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
