import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMecanicoComponent } from './read-mecanico.component';

describe('ReadMecanicoComponent', () => {
  let component: ReadMecanicoComponent;
  let fixture: ComponentFixture<ReadMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
