import { homeDataMock } from '../mock/home';
import { HomeService } from './home';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideMockAPIService();
}

function provideMockAPIService(): APIService {
  const homeService = homeDataMock();
  return { homeService };
}

export interface APIService {
  homeService: HomeService;
}
