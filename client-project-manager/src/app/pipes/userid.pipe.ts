import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userid'
})
export class UseridPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
