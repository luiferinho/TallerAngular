import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadVehiculoComponent } from './read-vehiculo.component';

describe('ReadVehiculoComponent', () => {
  let component: ReadVehiculoComponent;
  let fixture: ComponentFixture<ReadVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
