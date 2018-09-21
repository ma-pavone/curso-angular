import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. 1' },
      { id: 12, name: 'Narco 2' },
      { id: 13, name: 'Bombasto 3' },
      { id: 14, name: 'Celeritas 4' },
      { id: 15, name: 'Magneta 5' },
      { id: 16, name: 'RubberMan 6' },
      { id: 17, name: 'Dynama 7' },
      { id: 18, name: 'Dr IQ 8' },
      { id: 19, name: 'Magma 9' },
      { id: 20, name: 'Tornado' },
      { id: 21, name: 'Mr Marcel(l)o' }
    ];
    return {heroes};
  }
}
