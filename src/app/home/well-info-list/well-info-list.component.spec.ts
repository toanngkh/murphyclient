import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellInfoListComponent } from './well-info-list.component';

describe('WellInfoListComponent', () => {
  let component: WellInfoListComponent;
  let fixture: ComponentFixture<WellInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
