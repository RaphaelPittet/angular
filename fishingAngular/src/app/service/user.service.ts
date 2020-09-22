import {User} from '../model/User.model';
import {Subject} from 'rxjs';

export class UserService {

  private users: User[] = [
    {
      firsname: 'Raphael',
      lastname: 'Pittet',
      email: 'pittet.raphael.it@gmail.com',
      fishingStyle: 'au leurre',
      hobbies: ['fitness', 'peche', 'football']
    },    {
      firsname: 'Jean',
      lastname: 'Pittet',
      email: 'pittet.raphael.it@gmail.com',
      fishingStyle: 'au leurre',
      hobbies: ['fitness', 'peche', 'football']
    }
  ];
  userSubject = new Subject<User[]>();

  emiteUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User) {
    this.users.push(user);
    this.emiteUsers();
  }
}
