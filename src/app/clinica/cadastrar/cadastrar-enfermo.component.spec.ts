import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEnfermoComponent } from './cadastrar-enfermo.component';

describe('CadastrarEnfermoComponent', () => {
  let component: CadastrarEnfermoComponent;
  let fixture: ComponentFixture<CadastrarEnfermoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEnfermoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEnfermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
