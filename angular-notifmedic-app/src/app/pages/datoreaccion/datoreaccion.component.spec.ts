import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoreaccionComponent } from './datoreaccion.component';

describe('DatoreaccionComponent', () => {
  let component: DatoreaccionComponent;
  let fixture: ComponentFixture<DatoreaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoreaccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatoreaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
