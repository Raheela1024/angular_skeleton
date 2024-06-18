import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredComponentComponent } from './deferred-component.component';

describe('DeferredComponentComponent', () => {
  let component: DeferredComponentComponent;
  let fixture: ComponentFixture<DeferredComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferredComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
