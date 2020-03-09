import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { OcorrenciasPage } from './ocorrencias.page';

describe('OcorrenciasPage', () => {
  let component: OcorrenciasPage;
  let fixture: ComponentFixture<OcorrenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OcorrenciasPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OcorrenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
