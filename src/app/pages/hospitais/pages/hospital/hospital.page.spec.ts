import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HospitalPage } from './hospital.page';

describe('HospitalPage', () => {
  let component: HospitalPage;
  let fixture: ComponentFixture<HospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
