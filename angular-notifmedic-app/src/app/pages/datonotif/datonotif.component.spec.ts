import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatonotifComponent } from './datonotif.component';

describe('DatonotifComponent', () => {
  let component: DatonotifComponent;
  let fixture: ComponentFixture<DatonotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatonotifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatonotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
