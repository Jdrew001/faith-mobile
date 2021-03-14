import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiblestudyPage } from './biblestudy.page';

describe('BiblestudyPage', () => {
  let component: BiblestudyPage;
  let fixture: ComponentFixture<BiblestudyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblestudyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiblestudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
