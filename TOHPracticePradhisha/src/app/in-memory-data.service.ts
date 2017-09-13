import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const SList = [
        { code: 'APPL', name: 'Apple' },
        { code: 'GOOG', name: 'Google' },
        { code: 'AJX', name: 'Great Ajax Corp' },
        { code: 'ORCL', name: 'Oracle Corp' },
      ];
    return {SList};
  }
}