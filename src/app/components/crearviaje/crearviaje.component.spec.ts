import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage';
import { CrearviajeComponent } from './crearviaje.component';

describe('CrearviajeComponent', () => {
  let component: CrearviajeComponent;
  let fixture: ComponentFixture<CrearviajeComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearviajeComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule,IonicModule.forRoot()],
      providers: [Storage,{provide: ActivatedRoute, useValue: fakeActivatedRoute}],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearviajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
