import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';
import { BDLocalService } from './bdlocal.service';

describe('BDLocalService', () => {
  let service: BDLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
    });
    service = TestBed.inject(BDLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
