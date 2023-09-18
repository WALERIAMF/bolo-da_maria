import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheBoloComponent } from './detalhe-bolo.component';

describe('DetalheBoloComponent', () => {
  let component: DetalheBoloComponent;
  let fixture: ComponentFixture<DetalheBoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheBoloComponent]
    });
    fixture = TestBed.createComponent(DetalheBoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
