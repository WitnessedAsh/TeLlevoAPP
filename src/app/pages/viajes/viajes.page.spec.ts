import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ViajesPage } from './viajes.page';

describe('ViajesPage', () => {
  let component: ViajesPage;
  let fixture: ComponentFixture<ViajesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesPage ],
      imports: [HttpClientTestingModule,IonicModule.forRoot()],
      providers: [ActivatedRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(ViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
