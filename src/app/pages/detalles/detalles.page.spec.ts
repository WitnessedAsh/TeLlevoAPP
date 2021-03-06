import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UrlSerializer } from '@angular/router';
import { DetallesPage } from './detalles.page';

describe('DetallesPage', () => {
  let component: DetallesPage;
  let fixture: ComponentFixture<DetallesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPage ],
      imports: [IonicModule.forRoot()],
      providers: [UrlSerializer],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
