import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitudesEsperaPage } from './solicitudes-espera.page';

describe('SolicitudesEsperaPage', () => {
  let component: SolicitudesEsperaPage;
  let fixture: ComponentFixture<SolicitudesEsperaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesEsperaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudesEsperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
