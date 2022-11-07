import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPropietarioComponent } from './read-propietario.component';

describe('ReadPropietarioComponent', () => {
  let component: ReadPropietarioComponent;
  let fixture: ComponentFixture<ReadPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
