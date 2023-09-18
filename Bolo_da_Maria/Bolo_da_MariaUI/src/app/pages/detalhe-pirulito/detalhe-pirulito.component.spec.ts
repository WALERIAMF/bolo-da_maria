import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePirulitoComponent } from './detalhe-pirulito.component';

describe('DetalhePirulitoComponent', () => {
  let component: DetalhePirulitoComponent;
  let fixture: ComponentFixture<DetalhePirulitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhePirulitoComponent]
    });
    fixture = TestBed.createComponent(DetalhePirulitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
