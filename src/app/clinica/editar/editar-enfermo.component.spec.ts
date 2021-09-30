import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEnfermoComponent } from './editar-enfermo.component';

describe('EditarEnfermoComponent', () => {
  let component: EditarEnfermoComponent;
  let fixture: ComponentFixture<EditarEnfermoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEnfermoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEnfermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
