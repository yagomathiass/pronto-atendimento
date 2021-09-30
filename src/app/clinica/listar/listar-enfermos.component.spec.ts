import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEnfermosComponent } from './listar-enfermos.component';

describe('ListarEnfermosComponent', () => {
  let component: ListarEnfermosComponent;
  let fixture: ComponentFixture<ListarEnfermosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEnfermosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEnfermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
