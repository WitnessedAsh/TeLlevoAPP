import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NewcontraPage } from './newcontra.page';

describe('NewcontraPage', () => {
  let component: NewcontraPage;
  let fixture: ComponentFixture<NewcontraPage>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcontraPage ],
      imports: [RouterTestingModule,HttpClientTestingModule,IonicModule.forRoot()],
      providers: [Router,{provide: ActivatedRoute, useValue: fakeActivatedRoute}],
    }).compileComponents();

    fixture = TestBed.createComponent(NewcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
