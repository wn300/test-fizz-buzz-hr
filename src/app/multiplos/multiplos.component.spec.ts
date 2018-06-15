import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplosComponent } from './multiplos.component';

describe('MultiplosComponent', () => {
  let component: MultiplosComponent;
  let fixture: ComponentFixture<MultiplosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
