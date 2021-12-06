import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NewcontraPage } from './newcontra.page';

describe('NewcontraPage', () => {
  let component: NewcontraPage;
  let fixture: ComponentFixture<NewcontraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcontraPage ],
      imports: [HttpClientTestingModule,IonicModule.forRoot()],
      providers: [ActivatedRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(NewcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
