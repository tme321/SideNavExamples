import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMapComponent } from './not-map.component';

describe('NotMapComponent', () => {
  let component: NotMapComponent;
  let fixture: ComponentFixture<NotMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
