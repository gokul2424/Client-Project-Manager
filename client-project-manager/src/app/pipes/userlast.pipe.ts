import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../modules/user';
@Pipe({
  name: 'userlast'
})
export class UserlastPipe implements PipeTransform {

   transform(users: Array<User>, lastname?: string) {
        console.log(users);
        console.log(lastname);
        if(lastname)
        {
            let filteredTask: Array<User> = null;
            filteredTask= 
			users.filter(user => user.lastname.startsWith(lastname) )
            return filteredTask;
        }
        return users;
    }

}
