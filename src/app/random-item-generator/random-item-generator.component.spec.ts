import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomItemGeneratorComponent } from './random-item-generator.component';

describe('RandomItemGeneratorComponent', () => {
  let component: RandomItemGeneratorComponent;
  let fixture: ComponentFixture<RandomItemGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomItemGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomItemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
