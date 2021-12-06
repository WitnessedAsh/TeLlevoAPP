import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { MisdatosComponent } from './misdatos.component';

describe('MisdatosComponent', () => {
  let component: MisdatosComponent;
  let fixture: ComponentFixture<MisdatosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisdatosComponent ],
      imports: [IonicModule.forRoot()],
      providers: [Router],
    }).compileComponents();

    fixture = TestBed.createComponent(MisdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
