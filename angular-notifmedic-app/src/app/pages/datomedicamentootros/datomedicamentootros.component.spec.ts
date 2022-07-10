import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatomedicamentootrosComponent } from './datomedicamentootros.component';

describe('DatomedicamentootrosComponent', () => {
  let component: DatomedicamentootrosComponent;
  let fixture: ComponentFixture<DatomedicamentootrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatomedicamentootrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatomedicamentootrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
