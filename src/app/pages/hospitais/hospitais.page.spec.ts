import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HospitaisPage } from './hospitais.page';

describe('HospitaisPage', () => {
  let component: HospitaisPage;
  let fixture: ComponentFixture<HospitaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HospitaisPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HospitaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
