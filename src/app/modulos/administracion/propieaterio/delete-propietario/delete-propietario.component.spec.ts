import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePropietarioComponent } from './delete-propietario.component';

describe('DeletePropietarioComponent', () => {
  let component: DeletePropietarioComponent;
  let fixture: ComponentFixture<DeletePropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
