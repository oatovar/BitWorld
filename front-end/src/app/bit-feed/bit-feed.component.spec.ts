import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitFeedComponent } from './bit-feed.component';

describe('BitFeedComponent', () => {
  let component: BitFeedComponent;
  let fixture: ComponentFixture<BitFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
