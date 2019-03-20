import { Component ,OnInit,Input,ChangeDetectionStrategy,ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddprojectComponent implements OnInit {
	
showhidedate: boolean;
 createForm: FormGroup;
projects:Array<Object>=[];
  
  @Input('projectname') projectname:string=' ';
  @Input('priority') priority:number=0;
  @Input('startdate') startdate:string=' ';
  @Input('enddate') enddate:string=' ';
  
  constructor(public http:HttpClient,private cd: ChangeDetectorRef,private fb: FormBuilder)
  {

  }

  addproject(
	projectname:string, 
	priority:number,
    startdate:string,
    enddate:string)
	
	{
	this.cd.detectChanges();
    console.log(typeof(startdate));
	console.log(startdate);
	console.log(enddate);
	
	
   this.http.post('http://localhost:7001/projects',
   {
    projectname:projectname,
    priority:priority,
    startdate:startdate,
    enddate:enddate
  })
   .toPromise()
   .then(res=>{
       console.log(res)
       return res
})
}
 

  ngOnInit() {
  }

}




 
  
  
