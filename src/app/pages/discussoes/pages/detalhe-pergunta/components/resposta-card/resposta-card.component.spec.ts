import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespostaCardComponent } from './resposta-card.component';

describe('RespostaCardComponent', () => {
  let component: RespostaCardComponent;
  let fixture: ComponentFixture<RespostaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespostaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
