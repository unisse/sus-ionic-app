import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhePerguntaPage } from './detalhe-pergunta.page';

describe('DetalhePerguntaPage', () => {
  let component: DetalhePerguntaPage;
  let fixture: ComponentFixture<DetalhePerguntaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePerguntaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhePerguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
