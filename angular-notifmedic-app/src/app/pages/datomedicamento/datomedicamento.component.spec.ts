import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatomedicamentoComponent } from './datomedicamento.component';

describe('DatomedicamentoComponent', () => {
  let component: DatomedicamentoComponent;
  let fixture: ComponentFixture<DatomedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatomedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatomedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
