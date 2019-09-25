import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSkinCondDetailComponent } from './common-skin-cond-detail.component';

describe('CommonSkinCondDetailComponent', () => {
  let component: CommonSkinCondDetailComponent;
  let fixture: ComponentFixture<CommonSkinCondDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSkinCondDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSkinCondDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
