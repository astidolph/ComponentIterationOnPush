import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/assets/person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  @Input() person: Person;

  updatedName: string = null;

  constructor(private personService: PersonService) { }

  isEvenId(id: number) {
    console.log('hit child method with id:' + this.person.id);
    return id % 2 === 0;
  }

  updatePerson() {
    this.personService.updatePerson(this.person.id, this.updatedName);
    this.updatedName = null;
  }

}
