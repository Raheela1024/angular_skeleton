import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImageExampleComponent } from './ng-image-example.component';

describe('NgImageExampleComponent', () => {
  let component: NgImageExampleComponent;
  let fixture: ComponentFixture<NgImageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgImageExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgImageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
