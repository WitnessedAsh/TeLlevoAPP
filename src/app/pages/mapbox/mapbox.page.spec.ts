import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MapboxPage } from './mapbox.page';

describe('MapboxPage', () => {
  let component: MapboxPage;
  let fixture: ComponentFixture<MapboxPage>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxPage ],
      imports: [BrowserDynamicTestingModule,RouterTestingModule,IonicModule.forRoot()],
      providers: [Geolocation,{provide: ActivatedRoute, useValue: fakeActivatedRoute}],
    }).compileComponents();

    fixture = TestBed.createComponent(MapboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
