import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


 users:Array<Object>=[];
 
  @Input('firstname') firstname:string=' ';
  @Input('lastname') lastname:string=' ';
  @Input('employeeid') priority:number=0;
  
  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router)
  {

  }

  adduser(firstname:string,lastname:string,employeeid:number)
  {
    
   this.http.post('http://localhost:7001/users',
   {
    firstname:firstname,
    lastname:lastname,
    employeeid:employeeid
  })
   .toPromise()
   .then(res=>{
       console.log(res)
       return res})
}
 
 
 
 
 deleteuser(firstname:string)
  {
    
   this.http.delete('http://localhost:7001/employees/'+firstname)
   .toPromise()
   .then(res=>{
       console.log(res)
       return res})
}


updateuser(_id:string)
{
	console.log(_id)
  this.router.navigate(['updateuser/'+_id])
       
 }
              
  
  ngOnInit() {
	  
	  this.http.get('http://localhost:7001/user')
		.toPromise()
		.then(res=>
		{
			console.log(res);
			this.users=res as any;
		})
  }

}



