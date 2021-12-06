import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CrearviajePage } from './crearviaje.page';

describe('CrearviajePage', () => {
  let component: CrearviajePage;
  let fixture: ComponentFixture<CrearviajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearviajePage ],
      imports: [HttpClientTestingModule,IonicModule.forRoot()],
      providers: [ActivatedRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
