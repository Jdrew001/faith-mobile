import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GivePage } from './give.page';

describe('GivePage', () => {
  let component: GivePage;
  let fixture: ComponentFixture<GivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
