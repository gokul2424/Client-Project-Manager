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
  path: string[] = ['user'];
  order: number = 1; // 1 asc, -1 desc;
  @Input('firstname') firstname:string=' ';
  @Input('lastname') lastname:string=' ';
  @Input('employeeid') priority:number=0;
  
  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router)
  {

  }

  adduser(firstname:string,lastname:string,employeeid:number)
  {
    
   this.http.post('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/users',
   {
    firstname:firstname,
    lastname:lastname,
    employeeid:employeeid
  })
   .toPromise()
   .then(res=>{
       console.log(res)
       return res})
	   this.router.navigate(['home/'])
}
 
 
 
 
 deleteuser(firstname:string)
  {
    
   this.http.delete('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/employees/'+firstname)
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
    sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }          
  
  ngOnInit() {
	  
	  this.http.get('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/user')
		.toPromise()
		.then(res=>
		{
			console.log(res);
			this.users=res as any;
		})
  }

}



