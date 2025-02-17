import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmproductoComponent } from './frmproducto.component';

describe('FrmproductoComponent', () => {
  let component: FrmproductoComponent;
  let fixture: ComponentFixture<FrmproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmproductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
