import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureKeypressComponent } from './configure-keypress.component';

describe('ConfigureKeypressComponent', () => {
  let component: ConfigureKeypressComponent;
  let fixture: ComponentFixture<ConfigureKeypressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureKeypressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureKeypressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
