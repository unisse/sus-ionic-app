import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import {PreferenciasPage} from './preferencias.page';


describe('Tab1Page', () => {
  let component: PreferenciasPage;
  let fixture: ComponentFixture<PreferenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreferenciasPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PreferenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
