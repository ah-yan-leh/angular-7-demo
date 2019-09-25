import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSkinConditionsComponent } from './common-skin-conditions.component';

describe('CommonSkinConditionsComponent', () => {
  let component: CommonSkinConditionsComponent;
  let fixture: ComponentFixture<CommonSkinConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSkinConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSkinConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
