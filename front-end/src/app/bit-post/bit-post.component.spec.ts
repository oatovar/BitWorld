import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitPostComponent } from './bit-post.component';

describe('BitPostComponent', () => {
  let component: BitPostComponent;
  let fixture: ComponentFixture<BitPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
