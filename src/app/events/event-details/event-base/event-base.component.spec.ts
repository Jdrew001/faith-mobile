import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventBaseComponent } from './event-base.component';

describe('EventBaseComponent', () => {
  let component: EventBaseComponent;
  let fixture: ComponentFixture<EventBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBaseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
