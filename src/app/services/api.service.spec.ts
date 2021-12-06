import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { APIService } from './api.service';

describe('APIService', () => {
  let service: APIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(APIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
