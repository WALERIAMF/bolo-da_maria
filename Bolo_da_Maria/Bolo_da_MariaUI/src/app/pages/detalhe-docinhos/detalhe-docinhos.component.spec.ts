import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDocinhosComponent } from './detalhe-docinhos.component';

describe('DetalheDocinhosComponent', () => {
  let component: DetalheDocinhosComponent;
  let fixture: ComponentFixture<DetalheDocinhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheDocinhosComponent]
    });
    fixture = TestBed.createComponent(DetalheDocinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
