import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../modules/task'

@Pipe({
  name: 'sorttask'
})
export class SorttaskPipe implements PipeTransform {

  transform(tasks: Task[], path: string[], order: number): Task[] {
    // Check if is not null
    if (!tasks || !path || !order) return tasks;

    return tasks.sort((a: Task, b: Task) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    })
  }

}


