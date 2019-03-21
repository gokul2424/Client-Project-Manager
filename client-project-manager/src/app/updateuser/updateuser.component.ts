import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

users:Array<Object>=[];
 task_id:string;
 
  @Input('firstname') firstname:string=' ';
  @Input('lastname') lastname:string=' ';
  @Input('employeeid') priority:number=0;
  
  constructor(public http:HttpClient,private route: ActivatedRoute,
        private router: Router){
            this.task_id= route.snapshot.params['id'];

    }

  ngOnInit() {
  }
updateuser(task_id:string,firstname:string,lastname:string,employeeid:number)
  {
    console.log(task_id)
   this.http.put('http://ec2-54-152-23-16.compute-1.amazonaws.com:7001/editusers/'+task_id,
   {
    firstname:firstname,
    lastname:lastname,
    employeeid:employeeid
  })
   .toPromise()
   .then(res=>{
       console.log(res)
       return res})
	   this.router.navigate(['adduser/'])
}
}
