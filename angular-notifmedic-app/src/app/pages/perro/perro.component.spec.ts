import { ComponentFixture, TestBed } from '@angular/core/testing';

import { perroComponent } from './perro.component';

describe('perroComponent', () => {
  let component: perroComponent;
  let fixture: ComponentFixture<perroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ perroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(perroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
