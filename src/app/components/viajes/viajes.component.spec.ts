import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ViajesComponent } from './viajes.component';

describe('ViajesComponent', () => {
  let component: ViajesComponent;
  let fixture: ComponentFixture<ViajesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesComponent ],
      imports: [IonicModule.forRoot()],
      providers: [ActivatedRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(ViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
