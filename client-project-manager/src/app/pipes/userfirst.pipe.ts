import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../modules/user';
@Pipe({
  name: 'userfirst'
})
export class UserfirstPipe implements PipeTransform {

  transform(users: Array<User>, firstname?: string) {
        console.log(users);
        console.log(firstname);
        if(firstname)
        {
            let filteredTask: Array<User> = null;
            filteredTask= 
			users.filter(user => user.firstname.startsWith(firstname) )
            return filteredTask;
        }
        return users;
    }

}

