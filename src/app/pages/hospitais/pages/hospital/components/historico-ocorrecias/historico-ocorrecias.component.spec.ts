import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoricoOcorreciasComponent } from './historico-ocorrecias.component';

describe('HistoricoOcorreciasComponent', () => {
  let component: HistoricoOcorreciasComponent;
  let fixture: ComponentFixture<HistoricoOcorreciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoOcorreciasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoricoOcorreciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
