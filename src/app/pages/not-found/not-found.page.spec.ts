import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { UrlSerializer } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NotFoundPage } from './not-found.page';

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundPage ],
      imports: [IonicModule.forRoot()],
      providers: [UrlSerializer],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
