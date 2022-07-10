import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElefanteComponent } from './elefante.component';

describe('ElefanteComponent', () => {
  let component: ElefanteComponent;
  let fixture: ComponentFixture<ElefanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElefanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElefanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
