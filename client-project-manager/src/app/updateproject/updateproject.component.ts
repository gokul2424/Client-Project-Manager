import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {

projects:Array<Object>=[];
  
  @Input('projectname') projectname:string=' ';
  @Input('priority') priority:number=0;
  @Input('startdate') startdate:string=' ';
  @Input('enddate') enddate:string=' ';

 project_id:string;
 
  constructor(public http:HttpClient,private route: ActivatedRoute,
        private router: Router){
            this.project_id= route.snapshot.params['id'];

    }


updateproject(project_id:string,
	projectname:string, 
	priority:number,
    startdate:string,
    enddate:string)
  {
    console.log(project_id);
   this.http.put('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/editprojects/'+project_id,
   {
     projectname:projectname,
    priority:priority,
    startdate:startdate,
    enddate:enddate
  })
   .toPromise()
   .then(res=>{
       console.log(res)
       return res})
	   this.router.navigate(['addproject/'])
}
	
	
	
	
  ngOnInit() {
  }

}



