import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Person } from 'src/assets/person';

@Injectable({
  providedIn: 'root'
})
export class PersonServerService {

  people: Person[] = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Dave' },
    { id: 2, name: 'Steve' }
  ];

  constructor() { }

  getPeople() {
    return of(this.people);
  }
}
