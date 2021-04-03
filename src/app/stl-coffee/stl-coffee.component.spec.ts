import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StlCoffeeComponent } from './stl-coffee.component';

describe('StlCoffeeComponent', () => {
  let component: StlCoffeeComponent;
  let fixture: ComponentFixture<StlCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StlCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StlCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
