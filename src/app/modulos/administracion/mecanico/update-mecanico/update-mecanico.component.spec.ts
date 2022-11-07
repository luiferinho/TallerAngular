import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMecanicoComponent } from './update-mecanico.component';

describe('UpdateMecanicoComponent', () => {
  let component: UpdateMecanicoComponent;
  let fixture: ComponentFixture<UpdateMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
