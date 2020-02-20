import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaPerguntaPage } from './nova-pergunta.page';

describe('NovaPerguntaPage', () => {
  let component: NovaPerguntaPage;
  let fixture: ComponentFixture<NovaPerguntaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPerguntaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaPerguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
