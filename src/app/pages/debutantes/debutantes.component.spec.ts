import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebutantesComponent } from './debutantes.component';

describe('DebutantesComponent', () => {
  let component: DebutantesComponent;
  let fixture: ComponentFixture<DebutantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebutantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebutantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
