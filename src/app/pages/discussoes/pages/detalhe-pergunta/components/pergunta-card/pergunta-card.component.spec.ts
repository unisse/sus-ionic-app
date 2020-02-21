import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerguntaCardComponent } from './pergunta-card.component';

describe('PerguntaCardComponent', () => {
  let component: PerguntaCardComponent;
  let fixture: ComponentFixture<PerguntaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerguntaCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerguntaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
