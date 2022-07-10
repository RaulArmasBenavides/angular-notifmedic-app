import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatopacienteComponent } from './datopaciente.component';

describe('DatopacienteComponent', () => {
  let component: DatopacienteComponent;
  let fixture: ComponentFixture<DatopacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatopacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatopacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
