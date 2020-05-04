import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinistriesPage } from './ministries.page';

describe('MinistriesPage', () => {
  let component: MinistriesPage;
  let fixture: ComponentFixture<MinistriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinistriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
