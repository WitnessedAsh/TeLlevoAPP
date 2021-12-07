import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from 'src/app/pages/home/home.page';
import { ViajesComponent } from './viajes.component';

describe('ViajesComponent', () => {
  let component: ViajesComponent;
  let fixture: ComponentFixture<ViajesComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({  
      declarations: [ ViajesComponent ],
      imports: [RouterTestingModule.withRoutes([]),IonicModule.forRoot()],
      providers: [HomePage,{provide: Router, useValue: '/home'},{provide: ActivatedRoute, useValue: 'fakeActivatedRoute'}],
    }).compileComponents();

    fixture = TestBed.createComponent(ViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
