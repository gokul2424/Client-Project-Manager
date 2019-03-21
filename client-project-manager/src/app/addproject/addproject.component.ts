import { Component ,OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
	
showhidedate: boolean;
 createForm: FormGroup;
 
projects:Array<Object>=[];
  
  @Input('projectname') projectname:string=' ';
  @Input('priority') priority:number=0;
  @Input('startdate') startdate:string=' ';
  @Input('enddate') enddate:string=' ';
  
  constructor(public http:HttpClient,private fb: FormBuilder,private route: ActivatedRoute,
    private router: Router)
  {

  }

  addproject(
	projectname:string, 
	priority:number,
    startdate:string,
    enddate:string)
	
	{
	    console.log(typeof(startdate));
	console.log(startdate);
	console.log(enddate);
	
	
   this.http.post('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/projects',
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
this.router.navigate(['home/'])
}
 

  endproject(
	projectname:string, 
	priority:number,
    startdate:string,
    enddate:string)
{
	this.http.put('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/endprojects',
	{
	projectname:projectname,
    priority:priority,
    startdate:startdate,
    enddate:enddate
		
	})
		.toPromise()
		.then(res=>
		{
			console.log(res)
			return res
		})
}
  
  
  
  updateproject(_id:string)
{
	console.log(_id)
  this.router.navigate(['updateproject/'+_id])
       
 }
  
  
  
  
  
  
  
  
  
  
  
  
  ngOnInit() {
	  
	  this.http.get('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/project')
		.toPromise()
		.then(res=>
		{
			console.log(res);
			this.projects=res as any;
			console.log(this.projects);
		})
	  
  }

}




 
  
  
