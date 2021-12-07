import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { RcontraPage } from './rcontra.page';

describe('RcontraPage', () => {
  let component: RcontraPage;
  let fixture: ComponentFixture<RcontraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RcontraPage ],
      imports: [RouterTestingModule,IonicModule.forRoot()],
      providers: [Router],
    }).compileComponents();

    fixture = TestBed.createComponent(RcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
