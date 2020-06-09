import { Injectable } from '@angular/core';
import { Person } from 'src/assets/person';
import { PersonServerService } from './person-server.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  people: Person[] = [];

  constructor(private personServer: PersonServerService) { }

  getPeople() {
    this.personServer.getPeople().subscribe(x => this.people = x);
  }

  addPerson(name: string) {
    this.people.push({ id: this.people.length, name});
  }

  updatePerson(id: number, name: string) {
    const idx = this.people.findIndex(x => x.id === id);
    this.people[idx] = { id, name };
  }
}
