import { TestService } from './test.service';
import { of } from "rxjs";

describe('TestService', () => {
  let service: TestService;
  let httpClientSpy: any;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(TestService);
    httpClientSpy = {
      get: jest.fn()
    }
    service = new TestService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getDataV1 function', () => {
    const res = "Testdata";
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDataV1();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });
});
