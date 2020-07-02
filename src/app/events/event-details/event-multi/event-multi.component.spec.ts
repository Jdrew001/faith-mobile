import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventMultiComponent } from './event-multi.component';

describe('EventMultiComponent', () => {
  let component: EventMultiComponent;
  let fixture: ComponentFixture<EventMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMultiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
