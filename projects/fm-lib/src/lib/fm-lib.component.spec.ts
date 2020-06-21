import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FMLibComponent } from './fm-lib.component';

describe('FMLibComponent', () => {
  let component: FMLibComponent;
  let fixture: ComponentFixture<FMLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FMLibComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FMLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
