import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../modules/project'

@Pipe({
  name: 'sortproject'
})
export class SortprojectPipe implements PipeTransform {

  transform(projects: Project[], path: string[], order: number): Project[] {
    // Check if is not null
    if (!projects || !path || !order) return projects;

    return projects.sort((a: Project, b: Project) => {
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

