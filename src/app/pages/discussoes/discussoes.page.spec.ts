import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { DiscussoesPage } from './discussoes.page';

describe('Tab1Page', () => {
  let component: DiscussoesPage;
  let fixture: ComponentFixture<DiscussoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussoesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscussoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
