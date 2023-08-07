import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavComponent } from './home-nav.component';

describe('HomeNavComponent', () => {
  let component: HomeNavComponent;
  let fixture: ComponentFixture<HomeNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNavComponent]
    });
    fixture = TestBed.createComponent(HomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
