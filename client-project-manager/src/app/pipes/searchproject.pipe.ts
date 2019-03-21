import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../modules/project';
@Pipe({
  name: 'searchproject'
})
export class SearchprojectPipe implements PipeTransform {

  transform(projects: Array<Project>, projectname?: string) {
        console.log(projects);
        console.log(projectname);
        if(projectname)
        {
            let filteredTask: Array<Project> = null;
            filteredTask= 
			projects.filter(project => project.projectname.startsWith(projectname) )
            return filteredTask;
        }
        return projects;
    }

}

