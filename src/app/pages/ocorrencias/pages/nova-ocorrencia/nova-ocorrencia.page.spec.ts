import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaOcorrenciaPage } from './nova-ocorrencia.page';

describe('NovaOcorrenciaPage', () => {
  let component: NovaOcorrenciaPage;
  let fixture: ComponentFixture<NovaOcorrenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaOcorrenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaOcorrenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
